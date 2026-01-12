import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../styles/colors";


export default function AppHeader() {
  return <View style={styles.container}>
    
    <Image
        source={require("../../assets/images/mountain.png")}
        style = {styles.logoContainer}
    />
    <Text style={styles.textContainer}>hello</Text>
  </View>;
}
const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: colors.mediumGrey,
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
