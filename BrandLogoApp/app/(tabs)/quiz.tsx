// app/editProfile.tsx
import Button from "@/components/Button";
import defaultStyles from "@/styles/defaultStyles";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
/*
  EditProfile screen responsibilities:
  - When mounted, fetch the profile row for the logged-in user and populate fields.
  - Allow editing first_name, last_name, class_period.
  - Validate input, then upsert (insert or update) the profile row.
  - Provide feedback (loading, errors, success).
*/

export default function EditProfileScreen() {
  const [value, setValue] = useState(0);
  const [message, setMessage] = useState("");
  if (value === 3){
    setMessage("You should try black dimonds")
  }
  else if (value === 2){
    setMessage("You should try greens or blues")
  }
  else if (value === 1 || value === 0){
    setMessage("You should stick to the bunny hills")
  }

  return (
    <View style={defaultStyles.pageContainer}>
      <Text style={defaultStyles.headerText}>Find Your Ride Quiz</Text>
      <Text style={defaultStyles.questionText}>How comfortable are you getting on and off lifts?</Text>
      <Button title={"Comfortable"} onPress={() => setValue(prev => prev + 1)} ></Button>
      <Button title={"Unomfortable"} onPress={() => setValue(prev => prev + 0)}  ></Button>
      <Text style={defaultStyles.questionText}>What terrain do you prefer?</Text>
      <Button title={"Steep"} onPress={() => setValue(prev => prev + 1)}  ></Button>
      <Button title={"BunnyHill"}onPress={() => setValue(prev => prev + 0)} ></Button>
      <Text style={defaultStyles.questionText}>How do you handle speed?</Text>
      <Button title={"Well"} onPress={() => setValue(prev => prev + 1)}  ></Button>
      <Button title={"Unwell"} onPress={() => setValue(prev => prev + 0)} ></Button>
      <Text>{message}</Text>
      

    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginBottom: 24,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
