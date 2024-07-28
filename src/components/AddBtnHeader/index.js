import { TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"

import AddIcon from "../../../assets/svg/add-icon.svg"

export default function AddBtnHeader() {
  const navigation = useNavigation()

  return(
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate("AddAccount")
      }}
    >
      <AddIcon/>
    </TouchableOpacity>
  )
}