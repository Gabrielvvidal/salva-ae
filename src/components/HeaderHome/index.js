import { View, Text } from "react-native"
import { styles } from "./styles"

import ProfileAvatar from "../../../assets/svg/profile-avatar.svg"
import AddBtnHeader from "../AddBtnHeader"

export default function HeaderHome() {
  return(
    <View style={styles.container}>
      <View style={styles.containerUser}>
        <ProfileAvatar/>

        <View style={styles.containerName}>
          <Text style={styles.helloText}>
            Olá,
          </Text>

          <Text style={styles.userText}>
            Gabriel
          </Text>
        </View>
      </View>

      <AddBtnHeader/>
    </View>
  )
}