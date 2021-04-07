import React from 'react';
import { withTheme } from 'react-native-paper';
import { StyleSheet, View, StatusBar } from 'react-native';
import { useSelector } from "react-redux";

import  HeaderScreen  from '../../components/home/HomesHeader'


const HomeScreen = props => {
    const toggleTheme = useSelector(state => state.syteme.theme)
    const { container } = styles
    return (
        <View style={[container, {backgroundColor: props.theme.colors.surface}]}>
            <HeaderScreen navigation={props.navigation}/>
            <StatusBar backgroundColor={toggleTheme ? props.theme.colors.surface : 'black'} />
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
