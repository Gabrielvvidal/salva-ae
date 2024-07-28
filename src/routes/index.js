import { createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import Home from "../screens/Home";
import AddAccount from "../screens/AddAccount"
import SeeAccount from "../screens/SeeAccount"

const Stack = createStackNavigator()

export default function Routes() {
  return(
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="AddAccount" component={AddAccount}/>
        <Stack.Screen name="SeeAccount" component={SeeAccount}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}