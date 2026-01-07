import { StyleSheet } from "react-native";
import colors from "./colors";

const defaultStyles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: colors.darkBackground,
    justifyContent: "center",
    alignItems: "center",
  },
  bodyText: {
    fontSize: 20,
    color: colors.textOnDark,
  },
});

export default defaultStyles;
