import { View, Text } from "react-native"
import { styles } from "./styles"

import NotFoundAvatar from "../../../assets/svg/notFound-avatar.svg"
import BtnAddAcc from "../BtnAddAcc"

export default function NotFound() {
  return(
    <View style={styles.container}>
      <NotFoundAvatar/>

      <Text style={styles.message}>
        Nenhuma conta foi encontrada
      </Text>

      <BtnAddAcc/>
    </View>
  )
}