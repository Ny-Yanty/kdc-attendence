import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import moment from 'moment'


const Date = ({ date, onSelectDate, selected }) => {
  const day = moment(date).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD') ? 'Today' : moment(date).format('ddd')
  const dayNumber = moment(date).format('D')
  const fullDate = moment(date).format('YYYY-MM-DD')
  return (
    
    <TouchableOpacity
      onPress={() => onSelectDate(fullDate)}
      style={[styles.card, selected === fullDate && { backgroundColor: "#6146c6" }]}
    >
      <Text
        style={[styles.big, selected === fullDate && { color: "#fff" }]}
      >
        {day}
      </Text>
      <View style={{ height: 10 }} />
      <Text
        style={[
          styles.medium,
          selected === fullDate && { color: "#fff", fontWeight: 'bold', fontSize: 24 },
        ]}
      >
        {dayNumber}
      </Text>
    </TouchableOpacity>
    
  )
}

export default Date
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 20,
        borderColor: '#ddd',
        padding:13,
        marginVertical: 10,
        alignItems: 'center',
        height: 95,
        width: 70,
        marginHorizontal: 10,
       marginTop:30,

    },
    big: {
        fontWeight: 'regular',
        fontSize: 15,
    },
    medium: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})