import React, {useEffect, useState} from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MyTabs from './navigator/tab';
import Guest from './navigator/guest';
import {supabase} from './lib/supabase'

export default function App() {
  const loggedIn = true
  const [session, setSession] = useState(null)
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

  }, [])
  return (
    <NavigationContainer>
      {session? <MyTabs />: (
        <Guest/>
      )}
    </NavigationContainer>
  );
}
