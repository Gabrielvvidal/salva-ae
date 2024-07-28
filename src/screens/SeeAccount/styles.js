import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale } from "../../scripts/responsive";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020817",
    paddingHorizontal: horizontalScale(25)
  },

  headerTitle: {
    color: "#F8FAFC",
    fontSize: moderateScale(20),
    fontFamily: "Inter_700Bold",
    marginLeft: horizontalScale(80)
  }
})