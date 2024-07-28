import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../scripts/responsive";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 20,
    backgroundColor: "#1E293B",
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(10),
    marginTop: verticalScale(30),
    alignItems: "center"
  },

  searchInput: {
    color: "#F8FAFC",
    width: horizontalScale(240),
    fontSize: moderateScale(16),
    fontFamily: "Inter_400Regular"
  }
})