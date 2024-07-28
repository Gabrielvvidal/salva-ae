import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../scripts/responsive";
export const styles = StyleSheet.create({
  btnDark: {
    width: "100%",
    backgroundColor: "#020817",
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(5),
    borderRadius: 10,
    borderColor: "#F8FAFC",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: verticalScale(25)
  },

  btnLight: {
    width: "100%",
    backgroundColor: "#F8FAFC",
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(5),
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: verticalScale(25)
  },

  txtDark: {
    color: "#020817",
    fontSize: moderateScale(20),
    fontFamily: "Inter_700Bold"
  },

  txtLight: {
    color: "#F8FAFC",
    fontSize: moderateScale(20),
    fontFamily: "Inter_700Bold"
  }
})