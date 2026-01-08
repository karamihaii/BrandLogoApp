import { StyleSheet, Text, View } from "react-native";
import React from "react";
import defaultStyles from "../styles/defaultStyles";
import { SafeAreaView } from "react-native-safe-area-context";


export default function HomeScreen() {
  return (
    <SafeAreaView style={defaultStyles.pageContainer}>
      <Text style={defaultStyles.bodyText}>Best Home Page</Text>
    </SafeAreaView>
  );
}
