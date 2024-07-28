import { View } from "react-native"
import { styles } from "./styles"
import { useRoute } from "@react-navigation/native"
import ContainerInput from "../ContainerInput"

export default function ViewAccountInfo() {
  const route = useRoute()
  const {title, url, email, password} = route.params

  return(
    <View style={styles.container}>
      <ContainerInput
        labelTxt={"Título da conta"}
        valueInput={title}
        readOnly={true}
      />

      <ContainerInput
        labelTxt={"Link da plataforma"}
        placeholder={url === "" ? "Nenhum link foi inserido" : ""}
        valueInput={url}
        readOnly={true}
      />

      <ContainerInput
        labelTxt={"Email"}
        valueInput={email}
        readOnly={true}
      />

      <ContainerInput
        labelTxt={"Senha"}
        valueInput={password}
        readOnly={true}
      />
    </View>
  )
}