
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import TextField from "./components/TextField";
import colors from "./styles/colors";


export default function IndexScreen() {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [activity, setActivity] = useState<string>("");

  const openTabNav = () => {
    if (name != "" && activity != "") {
      setName(name);
      router.push({ pathname: "/(tabs)", params: { name, activity } });
    } else alert("Please enter your name and activity");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ski Sketcher</Text>
      <TextField placeholder="Username" value={name} onChangeText={setName} />

      <TextField
        placeholder="Password"
        value={activity}
        onChangeText={setActivity}
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
