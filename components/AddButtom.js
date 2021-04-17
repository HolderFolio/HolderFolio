import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableHighlight } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { toggleTabAddBottom } from '../redux/system/system-action';
import ModalAdd from './tabBar/ModalAdd';


const AddButtom = ({navigation}) => {

    const toggle = useSelector(state => state.syteme.TabAddBottomToggle)
    const dispatch = useDispatch()

    const toggleButton = () => {
        dispatch(toggleTabAddBottom(toggle))
    }


    return (
        <View style={styles.container}>
           <ModalAdd navigation={navigation}/>
            <TouchableHighlight style={styles.button} onPress={() => toggleButton()} underlayColor="#7F58FF">
            
                <FontAwesome5  name="plus" size={24} color="red" />
            </TouchableHighlight>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",

    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: "#7F58FF",
        position: "absolute",
        marginTop: -60,
        shadowColor: "#7F58FF",
        shadowRadius: 5,
        shadowOffset: { height: 10 },
        shadowOpacity: 0.3,
        borderWidth: 3,
        borderColor: "#FFFFFF"
    },
    font: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'blue'
    }
})

export default AddButtom;