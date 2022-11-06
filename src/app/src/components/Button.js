import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const But = () => (
    <LinearGradient
    // Button Linear Gradient<LinearGradient
    // Button Linear Gradient
    //colors={['#BD0059', '#fe0cd2', '#000000']}
    //locations={[0.2, 0.2, 0.3]}
    //end={{ x: 0.0009, y: 0.09 }}
    //</View>style={styles.button}>
  //<Text style={styles.itemText}>{item.text}</Text>
  //</LinearGradient>
    style={{
height: 25, 
width: 80, 
marginTop: 15, 
borderRadius: 5,
}
}

start={{x:0,y:1}}
end={{x:1,y:0}}
locations={[.5,0.7]}
colors={[ 'rgba(255, 13, 211, 0.542483)', 'rgba(rgba(123, 0, 179, 0)']}

>
  </LinearGradient>
);
const styles = StyleSheet.create({
    
    
    itemText: {
      color: 'rgba(255, 255, 255, 0.5)',
      marginTop: 5,
    },
    
  });

export default But;