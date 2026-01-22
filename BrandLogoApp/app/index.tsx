
import { StyleSheet, View } from "react-native";

import Auth from "@/components/Auth";
import colors from "./styles/colors";



export default function IndexScreen() {


  

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
