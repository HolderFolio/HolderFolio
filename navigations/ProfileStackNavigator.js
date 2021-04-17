import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';



const ProfileStackNavigator = props => {
  const Stack = createStackNavigator();
  const options = { headerShown: false }

  return (
    <Stack.Navigator 
      options={options}
    >
          <Stack.Screen
            name='dsad'
            component={HomeTabNavigator}
            options={options}
          />
          <Stack.Screen
            name='asdad'
            component={SideBarStackNavigator}
            options={options}
          />
          <Stack.Screen
            name="asda"
            component={AuthStackNavigator}
            options={options}
          />

    </Stack.Navigator>
  )
}

export default ProfileStackNavigator