import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import View1 from './BottomTAbs/Dashboard'
const Tab = createBottomTabNavigator();

export default function TabView1() {
  return (
    <Tab.Navigator
    initialRouteName="test"
    screenOptions={{
      tabBarActiveTintColor: '#042069',
      headerTitleAlign: "center",
      headerShadowVisible: false
    }}
  >
    <Tab.Screen
      name="test"
     // component={View1}
      children={()=><View1 />}

      options={{
        tabBarLabel: 'All Doctors',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="doctor"   color={color} size={size} />
        ),  tabBarBadge: 100,
      }}
    />

<Tab.Screen
      name="All Doctors"
      component={View1}
     // children={()=><AllDoctors navigation={navigation} logged={test}/>}

      options={{
        tabBarLabel: 'All Doctors',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="doctor"   color={color} size={size} />
        ),  tabBarBadge: 100,
      }}
    />






  </Tab.Navigator>
  );
}