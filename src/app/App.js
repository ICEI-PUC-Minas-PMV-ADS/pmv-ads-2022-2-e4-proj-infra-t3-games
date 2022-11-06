import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UserProvider from './src/contexts/UserContext';
import Route from './src/navigations/Route';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

console.log(awsconfig)
Amplify.configure({
    Auth: awsconfig
});

// You can get the current config object
const currentConfig = Auth.configure();

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
