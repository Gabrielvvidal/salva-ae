import { View, Text, TextInput } from "react-native"
import { styles } from "./styles"

export default function ContainerInput({labelTxt, placeholder, valueInput, onChangeFunc, keyboardType, password, readOnly}) {
  return(
    <View style={styles.containerInput}>
      <Text style={styles.label}>{labelTxt}</Text>

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={"#CBC5E1"}
        value={valueInput}
        onChangeText={onChangeFunc}
        keyboardAppearance="dark"
        keyboardType={keyboardType}
        secureTextEntry={password}
        readOnly={readOnly}
      />
    </View>
  )
}