import { TouchableOpacity, Text } from "react-native"
import { styles } from "./styles"

export default function ActionBtn({btnTheme, txtTheme, txtBtn, onPressFunc}) {
  return(
    <TouchableOpacity
      style={btnTheme === "light" ? styles.btnLight : styles.btnDark}
      activeOpacity={0.8}
      onPress={onPressFunc}
    >
      <Text
        style={txtTheme === "light" ? styles.txtLight : styles.txtDark}
      >
        {txtBtn}
      </Text>
    </TouchableOpacity>
  )
}