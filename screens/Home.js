import React, { useEffect, useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import MainHeader from '../components/MainHeader';
import FlipClock from '../components/FlipClock';
import ImagePicker from '../components/ImagePicker';
import { supabase } from '../lib/supabase';


export default function HomeScreen({ navigation }) {
  return (
    <View style={StyleSheet.container}>
      <MainHeader />
      {/* <FlipClock /> */}
      <ImagePicker />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF3F4',
    justifyContent: 'center',
    alignItems: 'center',

  }
})
