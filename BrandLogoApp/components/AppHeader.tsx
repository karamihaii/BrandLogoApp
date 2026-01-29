import { supabase } from "@/utils/supabase";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import { usePathname } from "expo-router";
import { Alert, Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import colors from "../styles/colors";


export default function AppHeader() {
  const pathname = usePathname();
  //const title = getTitleFromPath(pathname);
  async function handleLogout() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Logout error:", error);
        Alert.alert("Logout failed", error.message);
      }
    } catch (err: any) {
      Alert.alert("Logout failed", err?.message ?? String(err));
    }
  }
  return <View style={styles.container}>
    
    <Image
        source={require("../assets/images/mountain.png")}
        style = {styles.logoContainer}
    />
    <Text style={styles.text}>Ski Sketcher</Text>
    <TouchableHighlight onPress = {handleLogout}>
      <MaterialIcons name="logout" style = {styles.logout} size={50} />
    </TouchableHighlight>
    
  </View>;
}
const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: colors.mediumGrey,
    flexDirection: "row",
    
  },
  text:{
    fontSize: 30,
    marginTop: 50,
    paddingHorizontal: 5,
    color: colors.lightBackground
  },
  logout:{
    marginTop: 40,
    paddingHorizontal: 25,
    color: colors.lightBackground
  },
  logoContainer: {
    height: 60,
    width: 80,
    margin: 10,
    marginTop:35,
  },
  textContainer: {
    fontSize: 20,
    color: colors.darkBackground,
  }
});
function getTitleFromPath(pathname: string) {
  throw new Error("Function not implemented.");
}

