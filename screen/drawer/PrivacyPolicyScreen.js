import React from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import  HomesHeader  from '../../components/home/HomesHeader'


const PrivacyPolicyScreen = () => {
    const { container, titleStyle, contentStyle } = styles

    return (
        <View style={container}>
            <ScrollView>
                <HomesHeader />
                <Text style={titleStyle}>General Terms</Text>
                <Text style={contentStyle}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s and scrambled it to make a type specimen book.
                    It has survived not only five centuries.
                </Text>
                <Text style={contentStyle}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s and scrambled it to make a type specimen book.
                    It has survived not only five centuries.
                </Text>
                <Text style={titleStyle}>Privacy Agreement</Text>
                <Text style={contentStyle}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s and scrambled it to make a type specimen book.
                    It has survived not only five centuries.
                </Text>
                <Text style={titleStyle}>Personal Data</Text>
                <Text style={contentStyle}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s and scrambled it to make a type specimen book.
                    It has survived not only five centuries.
                </Text>
                
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignContent: 'center',
        justifyContent: 'center',
        marginLeft: 15,   
    },
    titleStyle: {
        fontSize: 18,
        color: "#5BBC9D",
        paddingBottom: 10
      },
      contentStyle: {
        fontSize: 15,
        paddingTop: 10,
        paddingBottom: 15,
        lineHeight: 20
      }
})

export default PrivacyPolicyScreen;