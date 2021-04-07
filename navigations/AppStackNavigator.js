import { useSelector } from "react-redux";
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import AuthStackNavigator from './AuthStackNavigator'
import SideBarStackNavigator from "./SideBarStackNavigator";
import HomeTabNavigator from "./HomeTabNavigator";


const AppStackNavigator = props => {
  const Stack = createStackNavigator();
  const options = { headerShown: false }
  const isSignedIn = useSelector(state => state.Auth.currentUser)

  return (
    <Stack.Navigator 
      initialRouteName="PortFolio"
      options={options}
    >
      {isSignedIn ? (
        <>
          <Stack.Screen
            name='TabNav'
            component={HomeTabNavigator}
            options={options}
          />
          <Stack.Screen
            name='SideBar'
            component={SideBarStackNavigator}
            options={options}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Auth"
            component={AuthStackNavigator}
            options={options}
          />
        </>
      )}

    </Stack.Navigator>
  )
}

export default AppStackNavigator