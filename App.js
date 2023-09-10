import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MyTabs from './navigator/tab';
import Guest from './navigator/guest';

export default function App() {
  const loggedIn = true
  return (
    <NavigationContainer>
      
      {loggedIn? <MyTabs/>: (
        <Guest/>
      )}
    </NavigationContainer>
  );
}
