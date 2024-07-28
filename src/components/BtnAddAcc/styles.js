import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../scripts/responsive";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8FAFC",
    borderRadius: 10,
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(5),
    flexDirection: "row",
    marginTop: verticalScale(15),
    alignItems: "center",
    justifyContent: "space-between"
  },

  text: {
    color: "#020817",
    fontSize: moderateScale(16),
    fontFamily: "Inter_700Bold"
  }
})