import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { IconButton, withTheme } from 'react-native-paper';


import ModelSideMenu from '../drawer/ModelSideMenu';
import { toggleDrawerAction } from '../../redux/system/system-action';



const HeaderScreen = props => {
    const dispatch = useDispatch();
    const toggle = useSelector(state => state.syteme.drawerNav)
    const { container, userIcone } = styles



    const toggleSideMenu = () => {
        dispatch(toggleDrawerAction(toggle))
    }

    return (
        <View style={[container,{paddingHorizontal: props.theme.sizes.horizontal}]}>
            <IconButton
                icon="account"
                color={props.theme.colors.text}
                size={26}
                onPress={() => toggleSideMenu()}
            />
            <ModelSideMenu navigation={props.navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    userIcone: {
    },
    barschartIcone: {
    }
})

export default withTheme(HeaderScreen)