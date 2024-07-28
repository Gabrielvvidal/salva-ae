import {View, Text, TextInput, TouchableOpacity} from "react-native"
import { styles } from "./styles"

import SearchIcon from "../../../assets/svg/search-icon.svg"

export default function SearchField() {
  return(
    <View style={styles.container}>
      <TextInput 
        style={styles.searchInput}
        placeholder="Procure uma conta..."
        placeholderTextColor={"#F8FAFC"}
      />

      <TouchableOpacity
        activeOpacity={0.8}
      >
        <SearchIcon/>
      </TouchableOpacity>
    </View>
  )
}