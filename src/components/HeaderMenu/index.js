import { View, Text, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { styles } from "./styles"

import BackIcon from "../../../assets/svg/back-icon.svg"

export default function HeaderMenu({title, stylePage}) {
  const navigation = useNavigation()

  return(
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.goBack()
        }}
      >
        <BackIcon/>
      </TouchableOpacity>

      <Text style={stylePage}>
        {title}
      </Text>
    </View>
  )
}