import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../scripts/responsive";

export const styles = StyleSheet.create({
  list: {
    paddingBottom: verticalScale(30),
    gap: verticalScale(15)
  }
})