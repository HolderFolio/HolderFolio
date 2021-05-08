import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { IconButton, withTheme } from 'react-native-paper';


import ModelSideMenu from '../../components/drawer/ModelSideMenu';
import { toggleDrawerAction } from '../../redux/system/system-action';
import  HeaderExchange  from '../../components/home/HeaderExchange'
import  HeaderInformations  from '../../components/home/HeaderInformations'


const HeaderScreen = props => {
    const dispatch = useDispatch();
    const toggle = useSelector(state => state.syteme.drawerNav)
    const { container ,header ,informations, exchange } = styles

    const toggleSideMenu = () => {
        dispatch(toggleDrawerAction(toggle))
    }

    return (
        <View style={[container,{paddingHorizontal: props.theme.sizes.horizontal}]}>
            <View style={header}>
                <IconButton
                    icon="account"
                    color={props.theme.colors.text}
                    size={26}
                    onPress={() => toggleSideMenu()}
                />
                <ModelSideMenu navigation={props.navigation}/>
            </View>

            <View style={informations}>
                <HeaderInformations />
            </View>

            <ScrollView nestedScrollEnabled={true} style={exchange}>
                <HeaderExchange horizontal={true} />
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        flex: 1
    },
    header: {
        backgroundColor: 'green',
        height: 50
    },
    informations: {
        backgroundColor: 'blue',
        flex: 1.5,
    },
    exchange: {
        flex: 1,
        backgroundColor: 'pink'
    },
})

export default withTheme(HeaderScreen)