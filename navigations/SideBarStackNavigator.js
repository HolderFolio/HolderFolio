import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../screen/drawer/ProfileScreen'
import SettingsScreen from '../screen/drawer/SettingsScreen'
import PortFolioSettingsScreen from '../screen/drawer/PortFolioSettingsScreen'
import ContactSupportScreen from '../screen/drawer/ContactSupportScreen'
import PrivacyPolicyScreen from '../screen/drawer/PrivacyPolicyScreen'


const SideBarStackNavigator = props => {
    const Stack = createStackNavigator();
    const options = { headerShown: false }
    return (
      <Stack.Navigator>
        <Stack.Screen
          name='Profile'
          component={ProfileScreen}
          options={options} 
        />
        <Stack.Screen
          name='PortFolioSettings'
          component={PortFolioSettingsScreen}
          options={options} 
        />
        <Stack.Screen
          name='Settings'
          component={SettingsScreen}
          options={options} 
        />
        <Stack.Screen
          name='ContactSupport'
          component={ContactSupportScreen}
          options={options} 
        />
        <Stack.Screen
          name='PrivacyPolicy'
          component={PrivacyPolicyScreen}
          options={options}
        />
      </Stack.Navigator>
    )
  }

  
export default SideBarStackNavigator