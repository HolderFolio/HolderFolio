import React, { useEffect, useState } from 'react' 
import { View, ActivityIndicator, StyleSheet} from 'react-native'




const SplashScreen = ({navigation, toogle}) => {
    const [animating, setAnimating] = useState(true);
    useEffect(() => {
        setTimeout(() => {
          setAnimating(false);
        }, 5000);
       
      }, []);

      return (
        <View style={styles.container}>

          <ActivityIndicator
            animating={animating}
            color="#FFFFFF"
            size="large"
            style={styles.activityIndicator}
          />
        </View>
      );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#307ecc',
    },
    activityIndicator: {
      alignItems: 'center',
      height: 80,
    },
  });
export default SplashScreen
