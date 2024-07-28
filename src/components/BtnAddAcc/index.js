import { TouchableOpacity, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { styles } from "./styles"

import PlusIcon from "../../../assets/svg/add-btn-icon.svg"

export default function BtnAddAcc() {
  const navigation = useNavigation()

  return(
    <TouchableOpacity 
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate("AddAccount")
      }}
    >
      <PlusIcon/>

      <Text style={styles.text}>
        Adicionar
      </Text>
    </TouchableOpacity>
  )
}