import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, AppState, AppStateStatus, StyleSheet, Text, View } from "react-native";

import Button from "@/components/Button";
import TextField from "@/components/TextField";
import colors from "@/styles/colors";
import { supabase } from "@/utils/supabase";
import React from "react";



export default function Auth() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("@gmail.com");
  const [password, setPassword] = useState<string>("123456");
  // used chatGPT to find the hasNmber test https://chatgpt.com/share/69726e74-ecb8-800f-a165-76d2ef726f24
  const hasNumber = (str: string) => /\d/.test(str);


  const openTabNav = () => {
    if (email != "" && password != "" && password.length >= 6 && hasNumber(password)) {
      setEmail(email);
      console.log(email, password);
      router.push({ pathname: "/(tabs)", params: { email, password } });
    } else alert("Please enter your username and password and make sure password is at least 6 characters and contains a number");
  };

  useEffect(() => {
    const handleAppStateChange = (nextState: AppStateStatus) => {
      if (nextState === "active") {
        supabase.auth.startAutoRefresh();
      } else {
        try {
          supabase.auth.stopAutoRefresh();
        } catch {}
      }
    };

    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange,
    );

    if (AppState.currentState === "active") {
      supabase.auth.startAutoRefresh();
    }

    return () => {
      if (typeof subscription?.remove === "function") {
        subscription.remove();
      }
      try {
        supabase.auth.stopAutoRefresh();
      } catch {}
    };
  }, []);

  async function signInWithEmail() {
    if (email != "" && password != "" && password.length >= 6 && hasNumber(password)) {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        Alert.alert(error.message);
      }
    } else alert("Please enter your username and password and make sure password is at least 6 characters and contains a number");
    
  }

  async function signUpWithEmail() {
    if (email != "" && password != "" && password.length >= 6 && hasNumber(password)) {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        Alert.alert(error.message);
      }
    } else alert("Please enter your username and password and make sure password is at least 6 characters and contains a number");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ski Sketcher</Text>
      <TextField placeholder="Username" value={email} onChangeText={setEmail} />

      <TextField
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secure
      />

      <Button title="Login" onPress={signInWithEmail}  />
      <Button title="Sign Up" onPress={signUpWithEmail}  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBackground,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.textOnDark,
    marginBottom: 20,
    fontFamily: "Georgia",
  },
});