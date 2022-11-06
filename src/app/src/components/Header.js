import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

const Header = () => {
  const _goBack = () => console.log('Went back');

  return (
    <Appbar.Header style={{ backgroundColor:'#211B23', borderColor: '#BD0059', borderBottomWidth: 5,}} >
      <Appbar.BackAction onPress={_goBack} style={{ backgroundColor:'#C2C2C2' }}  />
      
    </Appbar.Header>
  );
};

export default Header;