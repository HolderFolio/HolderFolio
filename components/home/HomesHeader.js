import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { IconButton, withTheme } from 'react-native-paper';


import ModelSideMenu from '../drawer/ModelSideMenu';
import { toggleDrawerAction } from '../../redux/system/system-action';
import PortFolioList from './PortFolioList';



const HeaderScreen = props => {
    const dispatch = useDispatch();
    const toggle = useSelector(state => state.syteme.drawerNav)
    const { container, userIcone } = styles

    const toggleSideMenu = () => {
        dispatch(toggleDrawerAction(toggle))
    }

    return (
        <View >
            <View style={[container,{paddingHorizontal: props.theme.sizes.horizontal}]}>
                <IconButton
                    icon="account"
                    color={props.theme.colors.text}
                    size={26}
                    onPress={() => toggleSideMenu()}
                />
                
                <ModelSideMenu navigation={props.navigation}/>
            </View>
            <View style={styles.list}>
                <PortFolioList horizontal={false}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '40%'
    },
    list: {
        marginLeft: '50%',
        marginRight: '50%',
        justifyContent: 'center',
        alignContent: 'center'
    },
    barschartIcone: {
    }
})

export default withTheme(HeaderScreen)