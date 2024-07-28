import {View, Text} from "react-native"
import { styles } from "./styles"

import FilterIcon from "../../../assets/svg/filter-icon.svg"

export default function HeaderAccSaved() {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Contas salvas</Text>

      <FilterIcon/>
    </View>
  )
}