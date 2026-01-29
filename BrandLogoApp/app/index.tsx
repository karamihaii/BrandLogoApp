
import { ActivityIndicator, StyleSheet, View } from "react-native";

import Auth from "@/components/Auth";
import { useAuth } from "@/components/AuthProvider";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import colors from "../styles/colors";



export default function IndexScreen() {
  const router = useRouter();
  const { session, isLoading } = useAuth();
  useEffect(() => {
    if (session?.user) {
      // Replace prevents going "back" to login screen
      router.replace("/(tabs)");
    }
  }, [router, session]);

  if (isLoading) {
    return <ActivityIndicator style={{ marginTop: 40 }} />;
  }

  if (session?.user) {
    // Redirecting — nothing to render
    return null;
  }

  

  return (
    <View style={styles.container}>
      <Auth></Auth>
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
