import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../screen/drawer/ProfileScreen'
import SettingsScreen from '../screen/drawer/SettingsScreen'


const SideBarStackNavigator = props => {
    const Stack = createStackNavigator();
  
    return (
      <Stack.Navigator>
        <Stack.Screen
          name='Profile'
          component={ProfileScreen} 
        />
        <Stack.Screen
          name='Settings'
          component={SettingsScreen} 
        />
      </Stack.Navigator>
    )
  }

  
export default SideBarStackNavigator