import React from 'react';
import { withTheme } from 'react-native-paper';
import { StyleSheet, View, StatusBar } from 'react-native';
import { useSelector } from "react-redux";

import  HeaderScreen  from '../../components/home/HomesHeader'

import  ModalAdd  from '../../components/tabBar/ModalAdd';
const HomeScreen = ({navigation,theme}) => {
    const toggleTheme = useSelector(state => state.syteme.theme)
    const { container } = styles
    return (
        <View style={[container, {backgroundColor: theme.colors.surface}]}>
            <HeaderScreen navigation={navigation}/>
           
            {/* <ModalAdd navigation={navigation}/> */}
            <StatusBar backgroundColor={toggleTheme ? theme.colors.surface : 'black'} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {  
        flex: 1, 
        height: StatusBar.currentHeight,
    }
})

export default withTheme(HomeScreen)
