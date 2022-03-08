import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Add_Address from './screens/Add_Adress';
import { NativeBaseProvider, Box } from "native-base";

import GettingStarted from './screens/Getting-started';
import LandingScreen from './screens/LandingScreen';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Splash from './screens/splash';
import HeadAche from './screens/HeadAche';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PatientDashboard from './screens/patientDashboard';
import Chat from './screens/Chat';
import ProductDetails from './screens/ProductDetails';
import Cart from './screens/Cart';
import Pickupstation from './screens/Pickupstation';
import CardPayment from './screens/CardPayment';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
     <Stack.Navigator  initialRouteName="Card Payment">
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false, headerTitleAlign: "center" }}/>
        <Stack.Screen name="Getting Started" component={GettingStarted} options={{ headerShown: false, headerTitleAlign: "center" }}/>
        <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false, headerTitleAlign: "center" }}/>
        <Stack.Screen name="Sign Up" component={Signup} options={{ headerShown: false, headerTitleAlign: "center" }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false, headerTitleAlign: "center" }}/>
        <Stack.Screen name="Dashboard" component={PatientDashboard} options={{ headerShown: false, headerTitleAlign: "center" }}/>
        <Stack.Screen name="Add Address" component={Add_Address} options={{ headerShown: false, headerTitleAlign: "center" }}/>
        <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false, headerTitleAlign: "center" }}/>
        <Stack.Screen name="Product Details" component={ProductDetails} options={{ headerShown: false, headerTitleAlign: "center" }}/>
        <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false, headerTitleAlign: "center" }}/>
        <Stack.Screen name="Pick Up" component={Pickupstation} options={{ headerShown: false, headerTitleAlign: "center" }}/>
        <Stack.Screen name="Card Payment" component={CardPayment} options={{ headerShown: false, headerTitleAlign: "center" }}/>
    </Stack.Navigator>
   </NavigationContainer>
   </NativeBaseProvider>
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



