import {React, useEffect, useState} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AntDesign } from '@expo/vector-icons';
import KeyboardAvoidingComponent from './TestChat'
import { Entypo } from '@expo/vector-icons';
import axios from 'axios';
import { BASE_URL } from '../API_KEY'
import Login from './Login';
import Splash from './splash';
import TabOne from './DoctorBottomTabs/TabOne';
import TabTwo from './DoctorBottomTabs/TabTwo';
import Shop from './DoctorBottomTabs/Shop';

const Tab = createBottomTabNavigator();

let DataArray=[];
let doctorsArray = [];
export default function PatientDashboard({navigation, route}) {
  const { name, account } = route.params;

const [data, setData] = useState([]);
  useEffect(()=>{
   // DataArray = [];
    axios.get(BASE_URL+'/suggestions')
    .then((res)=>{
// //console.log(res.data.data);
// let array;
// array.push(res.data.data);

res.data.data.map((element)=>{
    DataArray.push(element);

    
})



  setData(DataArray);
  //console.log(DataArray);
 // DataArray = [];

//  fetch doctors

axios.get(BASE_URL+'/doctors')
.then((res)=>{
  
res.data.data.map((element)=>{
  doctorsArray.push(element);
//console.log(doctorsArray);
  
})
})



 

    })

},[]);
  return (
    <Tab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: 'green',
        headerTitleAlign: "center",
        headerShadowVisible: false,
        headerShown:false,
      }}
    >
      <Tab.Screen
        name="TabOne"
        //component={TabOne}
        children={()=><TabOne DataArray={DataArray} name={name} account={account} navigation={navigation}/>}

        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={size} />
          ),  
        }}
      />
      <Tab.Screen
        name="TabTwo"
        //component={TabTwo}
        children={()=><TabTwo doctors={doctorsArray} navigation={navigation}/>}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" size={20} color={color} />
          ),
          
        }}
      />


<Tab.Screen
        name="Shop"
        //component={Shop}
        children={()=><Shop navigation={navigation}/>}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="shop" size={24} color={color} />
          ),  
        }}
      />

<Tab.Screen
        name="Account"
        component={KeyboardAvoidingComponent}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={20} color={color} />
          ), // tabBarBadge: 23,
        }}
      />
    </Tab.Navigator>
  );
}