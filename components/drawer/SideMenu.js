import React, { useState, useEffect } from 'react';
import { StyleSheet, View,  ScrollView, Text} from 'react-native';
import { IconButton, Avatar, withTheme, Divider, List, Button } from 'react-native-paper';
import { useSelector, useDispatch } from "react-redux";
import { AuthAction } from '../../redux/auth/auth-action';

import { toggleDrawerAction, toggleThemeColorAction} from '../../redux/system/system-action';

const SideMenu = ({ props, navigation} ) => {
    
    const dispatch = useDispatch();
    const toggle = useSelector(state => state.syteme.drawerNav)
    const toggleTheme = useSelector(state => state.syteme.theme)
    const [changeThemeColor, setChangeThemeColor] = useState("moon-waxing-crescent")
    const { container, header, avatarBlock, 
        avatarText, avatar, divider, list, 
         disconnect, labelDisconnect, avatarTextSub } = styles
    const image = require('../../assets/avatar/andres.jpg')

    useEffect(() => {
        return () => {
            setChangeThemeColor('moon-waxing-crescent')
        }
      }, []);

    const ToggleThemeColor = props  => {
        dispatch(toggleThemeColorAction(toggleTheme))
        if (!toggleTheme) {
            setChangeThemeColor('moon-waxing-crescent')
        } else {
            setChangeThemeColor('white-balance-sunny')
        }
    }
    const navigatorOpenClose = screen => {
        dispatch(toggleDrawerAction(toggle))
        return navigation.navigate(screen)
    }
    
    const logout = () => {
        dispatch(AuthAction.logout())
        return navigation.navigate('SignIn')
    }
    return (
       
        <ScrollView style={container} >
            <View style={header}>
                <IconButton
                    icon="arrow-left-thick"
                    color={"#f4f4f5"}
                    size={24}
                    onPress={() => dispatch(toggleDrawerAction(toggle))}
                />
                <IconButton
                    icon= {changeThemeColor}
                    color={"#f4f4f5"}
                    size={24}
                    onPress={() => ToggleThemeColor()}
                />
            </View>

            <View  style={[avatarBlock]}>
                <Avatar.Image style={avatar} size={96} source={image} />
                <Text style={avatarText}>Andres Gomes Iglesias</Text>
                <Text style={avatarTextSub}>Free acces</Text>
            </View >

            <Divider style={divider}/>

            <View  style={list}>
              
                <List.Item
                    title="Profile"
                    left={props => <List.Icon {...props}  color={'#5fa5a6'} icon="account-circle-outline" />}
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={() => navigatorOpenClose('Profile')}
                />
                <List.Item
                    title="Settings"
                    left={props => <List.Icon {...props} color={'#5fa5a6'} icon="cog-outline" />}
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={() => navigatorOpenClose('Settings')}
                />
                <List.Item
                    title="Help"
                    left={props => <List.Icon {...props}  color={'#5fa5a6'} icon="help-circle-outline" />}
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={(props) => console.log(props)}
                />
                <List.Item
                    title="share App"
                    left={props => <List.Icon {...props}   color={'#5fa5a6'}icon="application-import" />}
                    right={props => <List.Icon {...props} icon="chevron-right" />}
                    onPress={(props) => console.log(props)}
                />
            </View >

            <View>
                <Button  style={disconnect} labelStyle={labelDisconnect} mode="contained" onPress={() =>logout()}>
                    DISCONNECT
                </Button>
            </View>
      
        </ScrollView >
       
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    avatarBlock: {
        paddingVertical: 16,
        marginLeft: 10,
        alignItems: 'center',
    },
    styleText:  {
        fontSize: 32,
    },
    avatarTextSub:  {
        color: '#5fa5a6',
        marginTop:2
    },
    divider: {
        backgroundColor: '#39606b',
        marginHorizontal: 20,
        height: 1
    },
    avatarText: {
        marginTop: 16,
        marginBottom: 2,
        fontSize: 20,
        color: '#f3f3f4',
        marginHorizontal: 10,
    },
    list:  {
        marginVertical: 30,
    },
    listItems:  {
        paddingVertical: 5,
        paddingHorizontal: 8,
        flexDirection: 'row',
        alignItems: 'center',
        
    },

    avatar: {
    },
    disconnect: {
        marginTop: '9%',
        marginHorizontal:10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5fa5a6'
    },
    labelDisconnect: {
        paddingVertical: 6,
        width: '100%',
        fontSize: 14
    }
})

export default withTheme(SideMenu)