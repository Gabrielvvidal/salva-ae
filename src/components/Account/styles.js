import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../scripts/responsive";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(5),
    backgroundColor: "#1E293B",
    borderRadius: 10,
    gap: verticalScale(5)
  },

  txtName: {
    color: "#F8FAFC",
    fontSize: moderateScale(18),
    fontFamily: "Inter_700Bold"
  },

  txtMoreInfo: {
    color: "#F8FAFC",
    fontSize: moderateScale(14),
    fontFamily: "Inter_400Regular"
  }
})