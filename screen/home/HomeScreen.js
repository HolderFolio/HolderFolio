import React from 'react';
import { withTheme } from 'react-native-paper';
import { StyleSheet, View, StatusBar, FlatList, Text, ScrollView, Dimensions  } from 'react-native';
import { useSelector } from "react-redux";
import  HomesHeader  from '../../wrappers/home/HomesHeader'



import PortFolioScreen from './PortFolioScreen';
const screeenWidth = Dimensions.get('window').width
const screeenHeight = Dimensions.get('window').height
const HomeScreen = ({navigation,theme}) => {
    const toggleTheme = useSelector(state => state.syteme.theme)
    const isPortFolio = useSelector(state => state.PortFolio.postFolioList)
    const { container } = styles

    return (
        <View style={[container, {backgroundColor: theme.colors.surface}]}>
            <View style={{flex: 3}}>
                <HomesHeader navigation={navigation}/>
            </View>
            <View style={{flex: 2, backgroundColor: 'red'}}>
                 {/* { isPortFolio === null ? <PortFolioScreen navigation={navigation}/> : <HomeContainer />} */}
            </View>
            <StatusBar backgroundColor={toggleTheme ? theme.colors.surface : 'black'} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {  
        flex: 1, 
        height: StatusBar.currentHeight,
        // backgroundColor: 'red'
        
    }
})

export default withTheme(HomeScreen)
