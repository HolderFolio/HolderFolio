import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { withTheme } from 'react-native-paper';
import HomeContainer from './HomeContainer';




const PortFolioList = props => {

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll} horizontal={true}>
                {/* <HomeContainer horizontal={true} /> */}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    conainter: {


    },
    scroll: {
        width: 100,
        height: 30,
        margin: 0,
        padding: 0,
        backgroundColor: 'red'
    }

})

export default withTheme(PortFolioList)