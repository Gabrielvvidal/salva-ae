import { View, Text } from "react-native";
import { styles } from "./styles";
import { useInputContext } from "../../hooks/useInputContext"
import HeaderMenu from "../../components/HeaderMenu";
import AddAccountForm from "../../components/AddAccountForm";
import ActionBtn from "../../components/ActionBtn";

export default function AddAccount() {
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

  const saveAcc = async () => {
    try {
      const response = await fetch("http://SEUIPV4:3000/account/save", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          url: url,
          email: email,
          senha: password
        }),
        headers: {
          Accept: 'aplication/json',
          "Content-type": "application/json; charset=UTF-8"
        }
      })

      const data = await response.json()
      console.log(data)

      setTitle("")
      setUrl("")
      setEmail("")
      setPassword("")

    } catch (error) {
      console.log(error)
    }
  }

  return(
    <View style={styles.container}>
      <HeaderMenu 
        stylePage={styles.headerTitle}
        title={"Adicionar conta"}
      />

      <AddAccountForm/>

      <ActionBtn
        btnTheme={"light"}
        txtTheme={"dark"}
        txtBtn={"Salvar conta"}
        onPressFunc={saveAcc}
      />
    </View>
  )
}