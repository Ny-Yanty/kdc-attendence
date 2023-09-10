import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const Carousel = ({ list }) => {
    return (
        <FlatList
            data={list}
            horizontal
            keyExtractor={i => i.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity style={{ marginLeft: suppressDeprecationWarnings.l }}>
                        <View style={StyleSheet.card3}>
                            <Text>{item.title}</Text>
                        </View>
                    </TouchableOpacity>  
                )
            }} />
    )


}
export default Carousel