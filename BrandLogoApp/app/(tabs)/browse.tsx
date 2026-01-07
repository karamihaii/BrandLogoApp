import { StyleSheet, Text, View } from "react-native";
import React from "react";
import defaultStyles from "../styles/defaultStyles";


export default function SchoolScreen() {
  return (
    <View style={defaultStyles.pageContainer}>
      <Text style={defaultStyles.bodyText}>My School</Text>
    </View>
  );
}
