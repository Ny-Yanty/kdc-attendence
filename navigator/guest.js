import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login';


const Stack = createStackNavigator();

function Guest() {
    return (
        <Stack.Navigator >
            <Stack.Screen name='Sign In' component={LoginScreen}
                options={{
                    headerShown: true,
                }} />
        </Stack.Navigator>
    );
}

export default Guest