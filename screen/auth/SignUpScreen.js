import React from 'react';
import { withTheme } from 'react-native-paper';
import { StyleSheet, View, TextInput } from 'react-native';
import { useSelector } from "react-redux";



const SignUpScreen = props => {
    const [text, onChangeText] = useState("Useless Text");
    const [number, onChangeNumber] = useState(null);
    const toggleTheme = useSelector(state => state.syteme.theme)
    const { container } = styles
    return (
        <View style={[container, {backgroundColor: props.theme.colors.surface}]}>
           <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {  
        flex: 1, 
    }
})

export default withTheme(SignUpScreen)

