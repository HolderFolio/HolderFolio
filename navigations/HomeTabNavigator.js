import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import AllocationScreen from '../screen/home/AllocationScreen'
import HomeScreen from '../screen/home/HomeScreen';


const HomeTabNavigator = props => {
const Tab = createBottomTabNavigator();
const options = { headerShown: false }

  return (
    <Tab.Navigator
        initialRouteName="PortFolio"
        options={options}
    >
  
      {/* <Tab.Screen
        name='Add'
        component={SignUpScreen} 
      /> */}
      <Tab.Screen
        name='Allocation'
        component={AllocationScreen}
        options={options}
      />
      <Tab.Screen
        name='PortFolio'
        component={HomeScreen}
        options={options} 
      />
    </Tab.Navigator>
  )
}


export default HomeTabNavigator