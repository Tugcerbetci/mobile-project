/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import firebase from '@react-native-firebase/app';

import Login from './screens/Login';
import Home from './screens/Home';
import Tansiyon from './screens/Tansiyon';
import Seker from './screens/Seker';
import Ilac from './screens/Ilac';
import Tavsiye from './screens/Tavsiye';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Tansiyon" component={Tansiyon} />
        <Stack.Screen name="Seker" component={Seker} />
        <Stack.Screen name="Ilac" component={Ilac} />
        <Stack.Screen name="Tavsiye" component={Tavsiye} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
