import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "@/app/styles/colors";
import Button from "@/components/Button";
import TextField from "@/components/TextField";



export default function IndexScreen() {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [activity, setActivity] = useState<string>("");

  const openTabNav = () => {
    if (name != "" && activity != "" && activity.length >= 6) {
      setName(name);
      console.log(name, activity);
      router.push({ pathname: "/(tabs)", params: { name, activity } });
    } else alert("Please enter your username and password and make sure password is at least 6 digits");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ski Sketcher</Text>
      <TextField placeholder="Username" value={name} onChangeText={setName} />

      <TextField
        placeholder="Password"
        value={activity}
        onChangeText={setActivity}
        secure
      />

      <Button title="Login" onPress={openTabNav}  />
      <Button title="Sign Up" onPress={openTabNav}  />
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
  },
});