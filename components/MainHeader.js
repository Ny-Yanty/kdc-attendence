import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { G, Path } from 'react-native-svg';

const MainHeader = () => {
    const insets = useSafeAreaInsets();
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const currentHour = new Date().getHours();

        if (currentHour >= 5 && currentHour < 12) {
            setGreeting('Good morning');
        } else if (currentHour >= 12 && currentHour < 18) {
            setGreeting('Good afternoon');
        } else {
            setGreeting('Good evening!')
        }
    }, [])
    return (
        <View style={[styles.container, { marginTop: insets.top }]}>
            <View>
                <Text style={styles.text}>{greeting}</Text>
                <Text style={styles.fullName}>hello</Text>
            </View>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                fill="none"

            >
                <Path
                    stroke="#2D9EE0"
                    strokeLinecap="round"
                    strokeWidth={2}
                    d="M8.464 1.809A8.09 8.09 0 0 1 12 1c4.555 0 8.25 3.763 8.25 8.406v.846a5.21 5.21 0 0 0 .846 2.85l1.354 2.069c1.236 1.89.292 4.459-1.858 5.057a32.063 32.063 0 0 1-17.184 0C1.258 19.63.314 17.06 1.55 15.172l1.354-2.07a5.21 5.21 0 0 0 .846-2.85v-.846c0-1.289.285-2.51.795-3.602M6.5 21.4C7.3 23.498 9.46 25 12 25c.3 0 .593-.02.88-.06m4.62-3.54a5.4 5.4 0 0 1-1.591 2.208"
                />
            </Svg>
        
        </View>
    )

}
export default MainHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        backgroundColor: 'pink',
       
    },
    text: {
        fontSize: 16,
        fontWeight: 600,
        color: 'gray',
    },
    fullName: {
        fontSize: 27,
        fontWeight:'bold',

    }
})