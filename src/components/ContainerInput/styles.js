import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../scripts/responsive";
export const styles = StyleSheet.create({
  containerInput: {
    width: "100%",
    gap: verticalScale(5)
  },

  label: {
    color: "#F8FAFC",
    fontSize: moderateScale(20),
    fontFamily: "Inter_700Bold"
  },

  input: {
    width: "100%",
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
    color: "#F8FAFC",
    borderRadius: 10,
    fontSize: moderateScale(16),
    fontFamily: "Inter_400Regular",
    backgroundColor: "#1E293B"
  }
})