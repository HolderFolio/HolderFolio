
// import React, {useEffect, useState} from 'react';
// import { StyleSheet, View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
// import { useSelector } from "react-redux";
// import { ActivityIndicator, Colors, withTheme  } from 'react-native-paper';

// import HomeScreen from './screen/HomeScreen';
// import ProfileScreen from './screen/drawer/ProfileScreen';
// import SettingsScreen from './screen/drawer/SettingsScreen';
// import SignInScreen from './screen/auth/SignInScreen'
// import SignUpScreen from './screen/auth/SignUpScreen'

// import { createSwitchNavigator, createAppContainer } from 'react-navigation';

// // Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// // goes here.

// const AppStack = createStackNavigator({ Home: HomeScreen, Profile: ProfileScreen });
// const AuthStack = createStackNavigator({ SignIn: SignInScreen });

// export default createAppContainer(createSwitchNavigator(
//   {
//     AuthLoading: AuthLoadingScreen,
//     App: AppStack,
//     Auth: AuthStack,
//   },
//   {
//     initialRouteName: 'AuthLoading',
//   }
// ));


import React, {useEffect, useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from "react-redux";
import { ActivityIndicator, Colors, withTheme  } from 'react-native-paper';

import HomeScreen from './screen/HomeScreen';
import ProfileScreen from './screen/drawer/ProfileScreen';
import SettingsScreen from './screen/drawer/SettingsScreen';
import SignInScreen from './screen/auth/SignInScreen'
import SignUpScreen from './screen/auth/SignUpScreen'

function DrawerNav() {
    const Drawer = createDrawerNavigator();
   
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}
  

const NavigationFile = props => {
    const isSignedIn = useSelector(state => state.Auth.currentUser)
    const options = { headerShown: false }
    const Stack = createStackNavigator();
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        isSignedIn ? <ActivityIndicator animating={true} color={Colors.red800} /> : isSignedIn
 
       
      }, [isSignedIn])
    
    return (
        <View style={[styles.container, {backgroundColor: props.theme.colors.surface}]}>
            <Stack.Navigator initialRouteName={HomeScreen}>
                {isSignedIn ? (
                <>
                    <Stack.Screen name="HomeScreen" component={DrawerNav} options={options} />
                </>
                ) : (
                <>
                    <Stack.Screen name="SignIn" component={SignInScreen} />
                    <Stack.Screen name="SignUp" component={SignUpScreen} />
                    <Stack.Screen name="HomeScreen" component={DrawerNav} options={options} />
                </>
                )}
            </Stack.Navigator>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


export default withTheme(NavigationFile)