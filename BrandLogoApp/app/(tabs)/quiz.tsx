// app/editProfile.tsx
import defaultStyles from "@/styles/defaultStyles";
import React from "react";
import { StyleSheet, Text, View } from "react-native";


/*
  EditProfile screen responsibilities:
  - When mounted, fetch the profile row for the logged-in user and populate fields.
  - Allow editing first_name, last_name, class_period.
  - Validate input, then upsert (insert or update) the profile row.
  - Provide feedback (loading, errors, success).
*/

export default function EditProfileScreen() {
  

  return (
    <View style={defaultStyles.pageContainer}>
      <Text style={defaultStyles.headerText}>Find Your Ride Quiz</Text>
      <Text style={defaultStyles.questionText}>Ability Level?</Text>
      <Text style={defaultStyles.questionText}>What do you care most about?</Text>
      <Text style={defaultStyles.questionText}>Your style?</Text>
      

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
