import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from '../pages/Login';
import Register from '../pages/Register';
import ConfirmarCodigo from '../pages/ConfirmarCodigo';
import Home from '../pages/Home'

const Tab = createBottomTabNavigator();

const BottomRoutes = () => {
  return (
    <Tab.Navigator initialRouteName="Login">
     <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}

      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}

      />
      <Tab.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ConfirmarCodigo"
        component={ConfirmarCodigo}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
    
  );
};

export default BottomRoutes;
