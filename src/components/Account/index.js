import {TouchableOpacity, Text} from "react-native"
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

function Item({item, idAcc, titleAcc, urlAcc, emailAcc, passwordAcc}) {
  const navigation = useNavigation()

  return(
    <TouchableOpacity 
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate("SeeAccount", {
          id: idAcc,
          title: titleAcc,
          url: urlAcc,
          email: emailAcc,
          password: passwordAcc
        })
      }}
    >
      <Text style={styles.txtName}>{item.title}</Text>
      <Text style={styles.txtMoreInfo}>Clique para ver mais informações</Text>
    </TouchableOpacity>
  )
}

export default function Account({item}) {
  return(
    <Item
      item={item}
      idAcc={item._id}
      titleAcc={item.title}
      urlAcc={item.url}
      emailAcc={item.email}
      passwordAcc={item.senha}
    />
  )
}