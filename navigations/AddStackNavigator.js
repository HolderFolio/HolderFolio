import React from 'react';
import {  Text, View} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from '@react-navigation/stack';
import AddApi from '../components/tabBar/AddButtom/AddApi';
import AddAsset from '../components/tabBar/AddButtom/AddAsset';
import AddCustom from '../components/tabBar/AddButtom/AddCustom';



const AddStackNavigator = (props) => {
  // const Stack = createBottomTabNavigator();
  const Stack = createStackNavigator();
  const options = { headerShown: false }

  return (
    <View>
    <Stack.Navigator
    initialRouteName="addapi"
      options={{
        mode:"modal",
       }}
    >
          <Stack.Screen
            name='addapi'
            component={AddApi}
            // options={options}
          />
          <Stack.Screen
            name='add-asset'
            component={AddAsset}
            options={options}
          />
          <Stack.Screen
            name="add-custom"
            component={AddCustom}
            options={options}
          />
      {/* ) */}
    </Stack.Navigator> 
    </View>
  )
}

export default AddStackNavigator