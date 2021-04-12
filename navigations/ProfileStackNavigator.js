import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';



const ProfileStackNavigator = props => {
  const Stack = createStackNavigator();
  const options = { headerShown: false }

  return (
    <Stack.Navigator 
      initialRouteName="PortFolio"
      options={options}
    >
      {isSignedIn ? (
        <>
          <Stack.Screen
            name='Profile'
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

export default ProfileStackNavigator