import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import colors from "../app/styles/colors";


export default function AppHeader() {
  return <View style={styles.container}>
    
    <Image
        source={require("../assets/images/mountain.png")}
        style = {styles.logoContainer}
    />
    <Text style={styles.text}>Ski Sketcher</Text>
    <TouchableHighlight onPress = {() => console.log("log out")}>
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
