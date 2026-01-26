import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "@/app/styles/colors";
import Button from "@/components/Button";
import TextField from "@/components/TextField";



export default function IndexScreen() {
  const router = useRouter();
  const [name, setName] = useState<string>("@gmail.com");
  const [activity, setActivity] = useState<string>("123456");
  // used chatGPT to find the hasNmber test https://chatgpt.com/share/69726e74-ecb8-800f-a165-76d2ef726f24
  const hasNumber = (str: string) => /\d/.test(str);


  const openTabNav = () => {
    if (name != "" && activity != "" && activity.length >= 6 && hasNumber(activity)) {
      setName(name);
      console.log(name, activity);
      router.push({ pathname: "/(tabs)", params: { name, activity } });
    } else alert("Please enter your username and password and make sure password is at least 6 characters and contains a number");
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