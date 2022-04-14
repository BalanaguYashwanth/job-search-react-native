import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import firebase from '@firebase/app'
//import * as GoogleSignIn from 'expo-google-sign-in';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { styles } from '../styles/global'
import { Image } from 'react-native'

export default function info() {

    const [accesstoken, setAccesstoken] = useState('')
    const [username, setUsername] = useState('')
    const [details, setDetails] = useState('')

    useEffect(() => {
        async function fetchdata() {
            await AsyncStorage.getItem('access-token')
                .then((value) => {
                    let accessToken = value
                    axios.get('https://www.googleapis.com/userinfo/v2/me', {
                        headers: {
                            Authorization: `Bearer ${accessToken}`
                        }
                    }).then((res) => {
                        setDetails(res.data)
                    })
                        .catch(err => console.log(err))
                }
                )
        }

        fetchdata()
    }, [])


    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', textAlign: 'center' }} >
                <Image
                    source={{
                        uri: details.picture
                    }}

                    style={{ width: 150, height: 150, borderRadius: 200 / 2 }}
                />
                <Text style={{ margin: 10 }}> Name: {details.name} </Text>
                <Text style={{ margin: 10 }}> Email: {details.email} </Text>
            </View>
        </View>
    )
}
