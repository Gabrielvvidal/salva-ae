import { StyleSheet } from "react-native";
import { verticalScale, horizontalScale, moderateScale } from "../../scripts/responsive";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: 'row',
    marginTop: verticalScale(15)
  },
  
  containerUser: {
    flexDirection: "row",
    gap: horizontalScale(10),
    alignItems: "center"
  },

  containerName: {
    flexDirection: "column",

  },

  helloText: {
    color: "#F8FAFC",
    fontSize: moderateScale(20),
    fontFamily: "Inter_400Regular"
  },

  userText: {
    color: "#F8FAFC",
    fontSize: moderateScale(20),
    fontFamily: "Inter_700Bold"
  }
})