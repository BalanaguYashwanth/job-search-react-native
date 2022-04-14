import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles } from '../styles/global'
import { Feather } from '@expo/vector-icons';

export default function recruitersection({ navigation }) {

    function home() {
        //console.log('reacted')
        navigation.navigate('Aboutcompany')
    }

    function response() {
        //console.log('reacted1')
        navigation.navigate('Responses')
    }

    return (
        <View style={styles.container}>
            <Feather name="users" style={{ textAlign: 'center' }} size={90} color="black" />
            <TouchableOpacity style={styles.button} onPress={home}>
                <Text> Post a Job </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={response} >
                <Text> View Responses </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={ ()  => (navigation.push('Logout')) } >
                <Text> Logout </Text>
            </TouchableOpacity>

        </View>
    )
}

