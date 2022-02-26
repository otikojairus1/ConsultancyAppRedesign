import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Add_Adress from './screens/Add_Adress';
import Dashboard from './screens/Dashboard';
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
 // <Signup/>
 // <Add_Adress/>
  <Dashboard />
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



