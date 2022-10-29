import React from 'react';
import {StyleSheet, Image} from 'react-native';

const Logo = () =>{
  return <Image style={styles.image} source={require('../assets/login1.png')} />
};

const styles = StyleSheet.create({
 image:{
  position: 'absolute',
  width: 383,
  height: 132,
  left: 0,
  top: 664,
  
  background: 'url(image.png)',
  },
});

export default Logo;