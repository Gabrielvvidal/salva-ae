import { registerRootComponent } from "expo";
import { View, StatusBar } from "react-native";
import { useCallback } from "react";
import { 
  Inter_400Regular, 
  Inter_500Medium, 
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts
} from "@expo-google-fonts/inter"; 
import { InputContextProvider } from "./context/inputContext";
import * as SplashScreen from "expo-splash-screen" 
import Routes from "./routes"

import "react-native-gesture-handler"

SplashScreen.preventAutoHideAsync()

function App() {
  const [loaded, error] = useFonts({
    Inter_400Regular, 
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const onLayoutRootView =  useCallback(async () => {
    if (loaded || error) {
      await SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return(
    <InputContextProvider>
        <View 
          style={{flex: 1}}
          onLayout={onLayoutRootView}
        >
          <StatusBar backgroundColor={"#020817"}/>
          <Routes/>
        </View>
    </InputContextProvider>
  )
}

registerRootComponent(App)