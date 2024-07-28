import { View } from "react-native"
import { styles } from "./styles"
import { useInputContext } from "../../hooks/useInputContext"
import ContainerInput from "../ContainerInput"

export default function AddAccountForm() {
  const {
    title,
    setTitle,
    url,
    setUrl,
    email,
    setEmail,
    password,
    setPassword
  } = useInputContext()

  return(
    <View style={styles.container}>
      <ContainerInput
        labelTxt={"Título da conta"}
        placeholder={"Digite um título"}
        keyboardType={"default"}
        valueInput={title}
        onChangeFunc={setTitle}
      />

      <ContainerInput
        labelTxt={"Link da plataforma"}
        placeholder={"Digite o link da plataforma"}
        keyboardType={"url"}
        valueInput={url}
        onChangeFunc={setUrl}
      />

      <ContainerInput
        labelTxt={"Email"}
        placeholder={"Digite um email"}
        keyboardType={"email"}
        valueInput={email}
        onChangeFunc={setEmail}
      />

      <ContainerInput
        labelTxt={"Senha"}
        placeholder={"Digite uma senha"}
        keyboardType={"default"}
        password={true}
        valueInput={password}
        onChangeFunc={setPassword}
      />
    </View>
  )
}