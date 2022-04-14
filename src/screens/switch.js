import React from 'react'
import { Text, TextInput, View, TouchableOpacity, Touchable, Alert, Button } from 'react-native'
import { styles } from '../styles/global'
//import {Button} from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Switch({ navigation }) {

    function recruiterHandler() {
        navigation.push('Recruiter')
    }

    function jobseekerHandler() {
        navigation.push('Login')
    }

    return (
        <View style={styles.container}>
            {/* <AntDesign style={{ marginLeft:50 ,marginBottom:70 }} size={80}  name="QQ" color="black" /> */}

         
            <MaterialCommunityIcons name="owl" style={{ textAlign: 'center' }} size={50} color="black" />
            <Text style={{ textAlign: 'center', marginBottom:20, fontStyle:'italic' }}> Socialize the job search </Text>
            <TouchableOpacity style={styles.button} onPress={recruiterHandler}>
                <Text> Hire Talent </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={jobseekerHandler}>
                <Text> Job Search</Text>
            </TouchableOpacity>
        </View>
    )
}
