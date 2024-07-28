import { StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "../../scripts/responsive";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: verticalScale(40),
    alignItems: "center",
    gap: verticalScale(5)
  },

  message: {
    color: "#F8FAFC",
    fontSize: moderateScale(18),
    fontFamily: "Inter_500Medium"
  }
})