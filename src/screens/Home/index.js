import { View} from "react-native";
import { styles } from "./styles";
import HeaderHome from "../../components/HeaderHome"
import SearchField from "../../components/SearchField";
import HeaderAccSaved from "../../components/HeaderAccSaved";
import RenderAccounts from "../../components/RenderAccounts";

export default function Home() {
  return(
    <View style={styles.container}>
      <HeaderHome/>
      <SearchField/>
      <HeaderAccSaved/>
      <RenderAccounts/>
    </View>
  )
}