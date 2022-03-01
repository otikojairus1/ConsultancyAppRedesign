import {React, useEffect, useState} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AntDesign } from '@expo/vector-icons';
import KeyboardAvoidingComponent from './TestChat'
import { Entypo } from '@expo/vector-icons';

import Login from './Login';
import Splash from './splash';
import TabOne from './DoctorBottomTabs/TabOne';
import TabTwo from './DoctorBottomTabs/TabTwo';
import Shop from './DoctorBottomTabs/Shop';

const Tab = createBottomTabNavigator();


export default function PatientDashboard({navigation}) {
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
        children={()=><TabOne navigation={navigation}/>}

        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={size} />
          ),  
        }}
      />
      <Tab.Screen
        name="Universities"
        //component={TabTwo}
        children={()=><TabTwo navigation={navigation}/>}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" size={20} color={color} />
          ),
          
        }}
      />
      <Tab.Screen
        name="Courses"
        component={ Login}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="tago" size={20} color={color} />
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