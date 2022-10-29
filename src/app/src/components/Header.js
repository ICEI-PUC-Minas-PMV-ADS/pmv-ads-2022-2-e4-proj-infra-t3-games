import React from 'react';
import { Appbar,View } from 'react-native-paper';
import {StyleSheet} from 'react-native';

const Header = ({ title, goBack, children}) => {
  return (
                       
    <Appbar.Header style={{backgroundColor:'transparent', padding:40}}>
    
      {
        goBack && 
        <Appbar.BackAction onPress={goBack} />
      }
      <Appbar.Content title={title} style={styles.header} />

      {children}
    </Appbar.Header>

    
  );
};
const styles = StyleSheet.create({
  header:{
    alignItems: 'center',
   },
    view : {
    flex: 0.3,
    backgroundColor: "grey",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    },
   
    
 });
 

export default Header;
