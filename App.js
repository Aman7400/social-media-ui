import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import {colors} from "./src/theme/theme"
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MainNavigation from './src/navigation/MainNavigation';
import {
  Ubuntu_300Light,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
  useFonts
} from '@expo-google-fonts/ubuntu'
import { AuthContextProvider } from './src/contexts/AuthContext';


export default function App() {


  let [fontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    console.log("Loading fonts...");
    return <ActivityIndicator />
  }


  return (
    
      <SafeAreaProvider style={{backgroundColor:colors.background}}>
        <AuthContextProvider>
         <MainNavigation />
        </AuthContextProvider>
      </SafeAreaProvider>
  );
}

