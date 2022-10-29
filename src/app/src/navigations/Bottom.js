import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home'

const Tab = createBottomTabNavigator();

const BottomRoutes = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
    <Tab.Screen
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="Login"
        component={Login}
      />
      <Tab.Screen
        name="Register"
        component={Register}
      />
    </Tab.Navigator>
  );
};

export default BottomRoutes;
