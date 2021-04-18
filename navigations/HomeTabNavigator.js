
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import AllocationScreen from '../screen/home/AllocationScreen'
import HomeScreen from '../screen/home/HomeScreen';
import AddButtom from '../components/AddButtom';
import AddStackNavigator from './AddStackNavigator';
import ModalAdd from '../components/tabBar/ModalAdd';
import { View } from 'react-native';
import ModalAddConatiner from '../components/tabBar/ModalAddConatiner';


const HomeTabNavigator = () => {

const Tab = createBottomTabNavigator();
const options = { headerShown: false }


  return (
    
    <Tab.Navigator
    initialRouteName="PortFolio"
    options={options}
    >
      <Tab.Screen
        name='Allocation'
        component={AllocationScreen}
        options={options}
      />
      <Tab.Screen
        name='addbottom'
        component={ModalAddConatiner}
        options={({ route, navigation }) => ({
          tabBarLabel: () => null,
          tabBarIcon:  () => (
            <AddButtom navigation={navigation} />
          ),
        })}
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