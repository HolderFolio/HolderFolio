import React from 'react';
import { useSelector } from "react-redux";
import { createStackNavigator } from '@react-navigation/stack';

import AuthStackNavigator from './AuthStackNavigator'
import SideBarStackNavigator from "./SideBarStackNavigator";
import HomeTabNavigator from "./HomeTabNavigator";
import AddApi from '../components/tabBar/AddButtom/AddApi';
import AddAsset from '../components/tabBar/AddButtom/AddAsset';
import AddCustom from '../components/tabBar/AddButtom/AddCustom';
import CreatePortFolio from '../components/forms/CreatePortFolio';


const AppStackNavigator = props => {
  const Stack = createStackNavigator();
  const options = { headerShown: false }
  const isSignedIn = useSelector(state => state.Auth.currentUser)

  return (
    <Stack.Navigator initialRouteName="TabNav"options={options} >
      {isSignedIn ? (
        <>
          <Stack.Screen name='TabNav' component={HomeTabNavigator} options={options} />
          <Stack.Screen name='createPorfolio' component={CreatePortFolio} options={options} />
          <Stack.Screen name='addapi' component={AddApi} options={options} />
          <Stack.Screen name='add-asset' component={AddAsset} options={options} />
          <Stack.Screen name="add-custom" component={AddCustom} options={options} />
          <Stack.Screen name='SideBar' component={SideBarStackNavigator} options={options} />
        </>
      ) : (
        <>
          <Stack.Screen name="Auth" component={AuthStackNavigator} options={options}/>
        </>
      )}

    </Stack.Navigator>
  )
}

export default AppStackNavigator