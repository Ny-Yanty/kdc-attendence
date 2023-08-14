import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Svg, { G, Path } from 'react-native-svg';

import HomeScreen from '../screens/Home';
import Attendance from '../screens/Attendance';
import Message from '../screens/Message';
import Task from '../screens/Task';
import { StyleSheet, TouchableOpacity, View } from 'react-native';


const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{

                tabBarActiveTintColor: "#091E3A",
                tabBarInactiveTintColor: 'gray',

                tabBarStyle: {
                    flexDirection: 'column',
                    borderRadius: 200,
                    padding: 0
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    // tabBarButton: CustomTabButton,
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={focused && styles.individualTabWrapper}>
                            <Svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={size}
                                height={size}
                                fill="none"

                            >
                                <Path
                                    stroke={focused ? "#091E3A" : "gray"}
                                    strokeWidth={1.5}
                                    d="M2.75 12.204c0-2.289 0-3.433.52-4.381.518-.949 1.467-1.537 3.364-2.715l2-1.241C10.639 2.622 11.642 2 12.75 2c1.108 0 2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715.519.948.519 2.092.519 4.38v1.522c0 3.9 0 5.851-1.172 7.063C20.407 22 18.521 22 14.75 22h-4c-3.771 0-5.657 0-6.828-1.212-1.172-1.212-1.172-3.162-1.172-7.063v-1.521Z"
                                />
                                <Path
                                    stroke="#2D9EE0"
                                    strokeLinecap="round"
                                    strokeWidth={1.5}
                                    d="M8.75 17.333V16a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v1.333"
                                />
                            </Svg>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Message"
                component={Message}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Message',
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={focused && styles.individualTabWrapper}>
                            <Svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={size}
                                height={size}
                                fill="none"

                            >
                                <Path
                                    stroke={focused ? "#091E3A" : "gray"}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M6.25 18.735c-1.3-.129-2.175-.42-2.828-1.082-1.172-1.183-1.172-3.09-1.172-6.9 0-3.812 0-5.718 1.172-6.902 1.171-1.184 3.057-1.184 6.828-1.184h4c3.771 0 5.657 0 6.828 1.184 1.172 1.184 1.172 3.09 1.172 6.901 0 3.812 0 5.718-1.172 6.901-1.171 1.185-3.057 1.185-6.828 1.185-1.236 0-2.598.505-3.841 1.157l-.005.003c-1.995 1.046-2.992 1.57-3.484 1.235-.492-.333-.399-1.37-.212-3.44l.042-.471"
                                />
                                <Path
                                    stroke="#2D9EE0"
                                    strokeLinecap="round"
                                    strokeWidth={1.5}
                                    d="M12.25 10.752v.01m-4-.01v.01m8-.01v.01"
                                />
                            </Svg>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Attendance"
                component={Attendance}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Attendance',
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={focused && styles.individualTabWrapper}>
                            <Svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={size}
                                height={size}
                                fill="none"
                            >
                                <Path
                                    stroke={focused ? "#091E3A" : "gray"}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M.776 7.774c.067-2.347.304-3.759 1.146-4.74C3.093 1.667 4.979 1.667 8.75 1.667h4c3.771 0 5.657 0 6.828 1.367.842.981 1.079 2.393 1.146 4.74m-19.948 0C.75 8.694.75 9.76.75 11c0 4.4 0 6.6 1.172 7.966.653.763 1.528 1.1 2.828 1.248l8 .12c3.771 0 5.657 0 6.828-1.368C20.75 17.6 20.75 15.4 20.75 11c0-1.24 0-2.305-.026-3.226m-19.948 0h19.948"
                                />
                                <Path
                                    stroke={focused ? "#091E3A" : "gray"}
                                    strokeLinecap="round"
                                    strokeWidth={1.5}
                                    d="M10.528 12.334v.011m-4-.011v.011m8-.011v.011m-4 3.1v.011m-4-.011v.011m8-.011v.011"
                                />
                            </Svg>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Task"
                component={Task}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Task',
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={focused && styles.individualTabWrapper}>
                            <Svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={size}
                                height={size}
                                fill="none"

                            >
                                <Path
                                    stroke={focused ? "#091E3A" : "gray"}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M14.25 21.333c3.771 0 5.657 0 6.828-1.367C22.25 18.6 22.25 16.4 22.25 12c0-1.24 0-2.305-.026-3.226-.067-2.347-.304-3.759-1.146-4.74-1.171-1.367-3.057-1.367-6.828-1.367h-4c-3.771 0-5.657 0-6.828 1.367-.842.981-1.079 2.393-1.146 4.74-.026.92-.026 1.986-.026 3.226 0 4.4 0 6.6 1.172 7.966.653.763 1.528 1.1 2.828 1.248"
                                />
                                <Path
                                    stroke="#2D9EE0"
                                    strokeLinecap="round"
                                    strokeWidth={1.5}
                                    d="M6.761 12h-.01m.01-4h-.01m.01 8h-.01m11.166-4h-7.334m7.334-4h-7.334m7.334 8h-7.334"
                                />
                            </Svg>
                        </View>
                    ),
                }}
            />

        </Tab.Navigator>

    );
}
const styles = StyleSheet.create({
    individualTabWrapper: {
        borderTopWidth: 5,
        padding: 3,
        borderTopColor: "#2D9EE0",
       
    }
})

export default MyTabs