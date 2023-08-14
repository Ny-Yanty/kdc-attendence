import * as React from 'react';
import { Button, View, Text, StyleSheet  } from 'react-native';
import MainHeader from '../components/MainHeader';

export default function HomeScreen({ navigation }) {
  return (
    <View style={StyleSheet.container}>
<MainHeader/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#EBF3F4',

  }
})
