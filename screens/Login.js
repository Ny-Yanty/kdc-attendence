import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

import { Text, View, Alert, TextInput, Image, Pressable, StyleSheet, ActivityIndicator } from 'react-native';

const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  return (
    <View style={styles.all}>
      <View style={{ flexDirection: 'column', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={require('../assets/login.png')}
          style={{ width: 300, height: 250 }} />
        <Text style={styles.titleText}>Welcome to</Text>
        <Text style={styles.headText}>Kirirom Digital Cambodia</Text>
        <Text style={styles.smallText}>Login with the provided credentials</Text>
        <View style={styles.iconContainer}>
          <Image source={require('../assets/user.png')} style={styles.icon} />
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder={'email'}
            inputMode='email'
            style={styles.inputText}
          />
        </View>
        <View style={styles.iconContainer}>
          <Image source={require('../assets/password.png')} style={styles.icon1} />
          <TextInput
            placeholder="password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.inputText1}
          />
        </View>
        <Text style={styles.footNote}>This information can be changed later.</Text>

        {isLoading ? (
          <ActivityIndicator size="small" color="blue" />
        ) : (
          <Pressable style={styles.button} onPress={signInWithEmail} disabled={isLoading} >
            <Text style={styles.loginText}>Login</Text>
          </Pressable>

        )}

      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  all: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EBF3F4',
  },
  titleText: {
    fontSize: 17,
    color: '#475569',
    paddingTop: 50,
  },
  headText: {
    fontSize: 30,
    paddingTop: 25,
    letterSpacing: 1.7,
  },
  smallText: {
    fontSize: 13,
    paddingTop: 20,
    color: '#A9A9A9',
  },
  inputText: {
    width: 300,
    height: 50,
    borderWidth: 2,
    borderColor: '#2D9EE0',
    color: '#2D9EE0',
    marginBottom: 25,
    paddingHorizontal: 25,
    marginTop: 20,
    borderRadius: 10,
  },
  inputText1: {
    width: 300,
    height: 50,
    borderWidth: 2,
    borderColor: '#2D9EE0',
    color: '#2D9EE0',
    marginBottom: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  iconContainer: {
    width: '100%',
    position: 'relative',
    alignItems: 'center',
   
  },
  icon: {
    position: 'absolute',
    top: 38, // Adjust the icon position as needed
    left: 70, // Adjust the icon position as needed
    width: 18, // Set the width of the icon
    height: 18, // Set the height of the icon
    resizeMode: 'contain',
  },
  icon1: {
    position: 'absolute',
    top: 20,
    width: 18,
    right:340,


  },
  footNote: {
    marginTop: 7,
    marginBottom: 27,
    fontSize: 13,
    color: '#A9A9A9',

  },
  button: {
    width: 300,
    backgroundColor: '#2D9EE0',
    padding: 17,
    borderRadius: 10,
    alignItems: 'center',


  },
  loginText: {
    color: '#FCFEFC',
    fontWeight: '500',
    fontSize: 17,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default LoginScreen;
