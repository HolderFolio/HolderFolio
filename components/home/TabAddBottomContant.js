import React from 'react';
import { View, Text,StyleSheet } from 'react-native';


import { useSelector, useDispatch } from "react-redux";
import { System } from '../../redux/system/system-action';

const TabAddBottomContant = () => {

    const { container, userIcone } = styles
    const dispatch = useDispatch();
    const toggle = useSelector(state => state.syteme.drawerNav)

    return (
<View style={{container}}><Text>TEST</Text></View>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userIcone: {
    },
    barschartIcone: {
    }
})

export default TabAddBottomContant;