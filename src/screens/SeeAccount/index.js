import { View, Text } from "react-native";
import { styles } from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native"
import HeaderMenu from "../../components/HeaderMenu";
import ViewAccountInfo from "../../components/ViewAccountInfo";
import ActionBtn from "../../components/ActionBtn";

export default function SeeAccount() {
  const navigation = useNavigation()
  const route = useRoute()
  const {id} = route.params

  const deleteAcc = async () => {
    try {
      const response = await fetch(`http://SEUIPV4:3000/account/delete/${id}`, {method: "DELETE"})

      const json = response.json

      console.log(json)

      navigation.navigate("Home")
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <View style={styles.container}>
      <HeaderMenu
        stylePage={styles.headerTitle}
        title={"Ver conta"}
      />

      <ViewAccountInfo/>

      <ActionBtn
        btnTheme={"dark"}
        txtTheme={"light"}
        txtBtn={"Excluir conta"}
        onPressFunc={deleteAcc}
      />
    </View>
  )
}