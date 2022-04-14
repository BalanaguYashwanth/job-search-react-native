import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, Touchable, Alert } from 'react-native'
import { styles } from '../styles/global'
import { TextInput, Button } from 'react-native-paper'
import { fb } from '../authentication/config'
//import {Button} from 'react-native-paper'
import * as Google from 'expo-google-app-auth';
import { SocialIcon } from 'react-native-elements'
import firebase from 'firebase'
import * as AppAuth from 'expo-app-auth';
import AsyncStorage from '@react-native-community/async-storage'

export default function recruiter({ navigation }) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

//     function checkIfLogin(){
//         firebase.auth().onAuthStateChanged((user) => {
//             if(user){
//                 navigation.navigate('Recruitersection')
//             }
//             else{
//                 navigation.navigate('Recruiter')
//             }
//         })
//     }

// // get the user and do auto login later

//     useEffect( () => {
//         checkIfLogin()
//     },[])

    async function login() {
        try {
            const result = await Google.logInAsync({
                androidClientId: '123772005102-qc59j7ubfutr5t3q2pfihs5sct9h36kj.apps.googleusercontent.com',
                androidStandaloneAppClientId:'123772005102-q90j9t39qn3b3f3dgft5kt1hvgdrkdas.apps.googleusercontent.com',
                //iosClientId: YOUR_CLIENT_ID_HERE,
                scopes: ['profile', 'email'],
                behaviour:'web',
                redirectUrl: `${AppAuth.OAuthRedirect}:/oauthredirect`
            });

            if (result.type === 'success') {
                await AsyncStorage.setItem('recruiterId',result.user.id)
                await AsyncStorage.setItem('recruiterEmail',result.user.email)
                navigation.navigate('Recruitersection')
            } else {
                navigation.navigate('Recruiter')
                return {
                    cancelled: true 
                    };
            }
        } catch (e) {
            return { error: true };
        }
    }


    return (
        <View style={styles.container}>
            <View >
                <Text style={{textAlign:'center', fontWeight:'bold'}}> Login As Recruiter </Text>
                {/* <TextInput  mode="outlined" onChangeText={(value)=>setEmail(value)}  label="Email Id" />
            <TextInput type="password" mode="outlined" onChangeText={(value)=>setPassword(value)}   label="Password" /> */}
                <SocialIcon
                    title='Sign In With Google'
                    button
                    type={"google-plus-official"}
                    onPress={login}
                />
            </View>
        </View>
    )
}
