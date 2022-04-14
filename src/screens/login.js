import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { styles } from '../styles/global'
import Constants from 'expo-constants';
import * as Google from 'expo-google-app-auth';
import * as AppAuth from 'expo-app-auth';
import { Firebase } from '../authentication/config'
import firebase from '@firebase/app'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SocialIcon } from 'react-native-elements'

export default function login({ navigation }) {

  async function submit() {
    try {
      //await GoogleSignIn.askForPlayServicesAsync();
      const result = await Google.logInAsync({
        androidClientId: '123772005102-qc59j7ubfutr5t3q2pfihs5sct9h36kj.apps.googleusercontent.com',
        androidStandaloneAppClientId: '123772005102-q90j9t39qn3b3f3dgft5kt1hvgdrkdas.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
        behaviour: 'web',
        redirectUrl: `${AppAuth.OAuthRedirect}:/oauthredirect`
      });
      if (result.type === 'success') {
        console.log(result.user.id);
        await AsyncStorage.setItem('access-token', result.accessToken)
        await AsyncStorage.setItem('user-id', result.user.id)
        await AsyncStorage.setItem('email-id', result.user.email)
        navigation.push('Jobportal')
      } else {
        navigation.push('Login')
      }
    } catch ({ message }) {
      alert('login: Error:' + message);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center', fontWeight: 'bold' }}> Login As Jobseeker </Text>

      <SocialIcon
        title='Sign In With Google'
        button
        type={"google-plus-official"}
        onPress={submit}
      />
    </View>
  )
}
