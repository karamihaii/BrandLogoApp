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
    fontSize: 35,
    color: colors.textOnDark,
    fontFamily: "Georgia",
    textAlign: "center",
  },
  inputBoxes: {
    padding: 5,
    width: 300,
    height: 40,
    marginVertical: 5,
    borderWidth: 2,
    fontSize: 16,
    color: colors.primaryLight,
    borderRadius: 5,
  },
  headerText:{
    fontSize: 35,
    color: colors.textOnDark,
    marginTop: "-40%",
    fontFamily: "Georgia"
  },
  questionText:{
    fontSize: 25,
    color: colors.lightGrey,
    textAlign: "left",
    fontFamily: "Georgia"
  },
  tinyText:{
    fontSize: 15,
    color: colors.lightGrey,
    
    fontFamily: "Georgia"
  },

});

export default defaultStyles;
