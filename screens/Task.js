
import { useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MainHeader from '../components/MainHeader';
import Calendar from '../components/Calendar';




export default function Task({ navigation }) {
   const [selectedDate, setSelectedDate] = useState(null);

    return(
      <View>
      <MainHeader/>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
         
           <Calendar onSelectDate={setSelectedDate} selected={selectedDate} />
           <StatusBar style="auto" />
        </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });