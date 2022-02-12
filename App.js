import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GettingStarted from './screens/Getting-started';
import LandingScreen from './screens/LandingScreen';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Splash from './screens/splash';


export default function App() {
  return (
   // <GettingStarted />
  //<Splash/>
  // <LandingScreen/>
  //<Login/>
  <Signup/>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position:"relative"
  },
});



