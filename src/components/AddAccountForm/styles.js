import { StyleSheet } from "react-native";
import { verticalScale } from "../../scripts/responsive";
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: verticalScale(30),
    gap: verticalScale(15)
  },
})