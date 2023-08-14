import React, { useState } from 'react';
import { Text, View, Alert, TextInput, Image, Pressable, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const validUsername = 'demo';
  const validPassword = 'password';

  const handleLogin = () => {
    // Validate username and password fields
    if (!username || !password) {
      Alert.alert('Invalid Credentials', 'Please enter both username and password.');
      return;
    }

    setIsLoading(true);

    // Simulate login request with a delay to demonstrate loading indicator
    setTimeout(() => {
      setIsLoading(false);

      if (username === validUsername && password === validPassword) {
        navigation.navigate('Home');
      } else {
        Alert.alert('Invalid Credentials', 'The username or password is incorrect. Please try again.');
      }
    }, 1500); // Simulating a network request with 1.5 seconds delay
  };
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
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
            value={username}
            onChangeText={(text) => setUsername(text)}
            placeholder={'username'}
            style={styles.inputText}
          />
        </View>

        <TextInput
          placeholder="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.inputText1}
        />
        <Text style={styles.footNote}>This information can be changed later.</Text>

        {/* <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </Pressable> */}
        {isLoading ? (
          <ActivityIndicator size="small" color="blue" />
        ) : (
       
          <Pressable style={styles.button} onPress={handleLogin} disabled={isLoading} >
            <Text style={styles.loginText}>Login</Text>
          </Pressable>
         
        )}

      </View>

    </View>
  )
}
const styles = StyleSheet.create({
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
    width: '100%',
    height: 40,
    borderWidth: 2,
    borderColor: '#2D9EE0',
    marginBottom: 25,
    padding: 25,
    marginTop: 20,
    borderRadius: 10,
  },
  inputText1: {
    width: '300px',
    height: 40,
    borderWidth: 2,
    borderColor: '#2D9EE0',
    marginBottom: 10,
    padding: 25,
    borderRadius: 10,
  },
  iconContainer: {
    width: '100%',
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    top: 38, // Adjust the icon position as needed
    left: 8, // Adjust the icon position as needed
    width: 18, // Set the width of the icon
    height: 18, // Set the height of the icon
    resizeMode: 'contain',
  },
  footNote: {
    marginTop: 7,
    marginBottom: 27,
    fontSize: 13,
    color: '#A9A9A9',

  },
  button: {
    width: '300px',
    backgroundColor: '#2D9EE0',
    padding: 17,
    alignContent: 'center',
    textAlign: 'center',
    borderRadius: 10,

  },
  loginText: {
    color: '#FCFEFC',
    fontWeight: '500',
    fontSize: '17px'
  }
});

export default LoginScreen;
