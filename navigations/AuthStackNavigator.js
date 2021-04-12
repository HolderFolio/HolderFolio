import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '../screen/auth/SignInScreen'
import SignUpScreen from '../screen/auth/SignUpScreen'
import ForegetPassword from '../screen/auth/ForegetPassword';


const AuthStackNavigator = props => {
  const Stack = createStackNavigator();
  const options = { headerShown: false }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SignIn'
        component={SignInScreen}
        options={options}
      />
      <Stack.Screen
        name='SignUp'
        component={SignUpScreen} 
        options={options}
      />
      <Stack.Screen
        name='ForegetPassword'
        component={ForegetPassword} 
        options={options}
      />
    </Stack.Navigator>
  )
}


export default AuthStackNavigator