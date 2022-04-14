import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { fb } from '../authentication/config'
import * as Google from 'expo-google-app-auth';

export default function logout({ navigation }) {

    useEffect(() => {
        async function loggedout() {
            navigation.replace('Switch')
        }
        loggedout()
    }, [])

    return (
        <View>
            <Text>Logging out..</Text>
        </View>
    )

}
