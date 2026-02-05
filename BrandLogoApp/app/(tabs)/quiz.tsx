// app/editProfile.tsx
import Button from "@/components/Button";
import defaultStyles from "@/styles/defaultStyles";
import React, { useEffect, useState } from "react";
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

  // ✅ FIX: move state updates into useEffect
  useEffect(() => {
    if (value >= 3) {
      setMessage("You should try black diamonds");
    } else if (value === 2) {
      setMessage("You should try greens or blues");
    } else {
      setMessage("You should stick to the bunny hills");
    }
  }, [value]);

  return (
    <View style={defaultStyles.pageContainer}>
      <Text style={defaultStyles.headerText}>Find Your Ride Quiz</Text>

      <Text style={defaultStyles.questionText}>
        How comfortable are you getting on and off lifts?
      </Text>
      <Button title="Comfortable" onPress={() => setValue(prev => prev + 1)} />
      <Button title="Uncomfortable" onPress={() => setValue(prev => prev + 0)} />

      <Text style={defaultStyles.questionText}>
        What terrain do you prefer?
      </Text>
      <Button title="Steep" onPress={() => setValue(prev => prev + 1)} />
      <Button title="Bunny Hill" onPress={() => setValue(prev => prev + 0)} />

      <Text style={defaultStyles.questionText}>
        How do you handle speed?
      </Text>
      <Button title="Well" onPress={() => setValue(prev => prev + 1)} />
      <Button title="Unwell" onPress={() => setValue(prev => prev + 0)} />

      <Text style={defaultStyles.bodyText}>{message}</Text>
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

