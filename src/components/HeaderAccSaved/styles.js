import { StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "../../scripts/responsive";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: verticalScale(30),
    marginBottom: verticalScale(30),
    alignItems: "center"
  },

  title: {
    color: "#F8FAFC",
    fontSize: moderateScale(24),
    fontFamily: "Inter_700Bold"
  }
})