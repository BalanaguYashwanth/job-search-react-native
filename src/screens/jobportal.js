import React from 'react'
import { Touchable } from 'react-native'
import { View, Text, Button, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../styles/global'
import { AntDesign } from '@expo/vector-icons';

export default function jobportal({navigation}) {
    return (
        <View style={styles.container}>
            <View >
                <AntDesign name="addusergroup" style={{ textAlign: 'center' }} size={100} color="black" />
                <TouchableOpacity onPress={ () => (navigation.push('Jobseeker'))} style={styles.button} >
                    <Text> Search Jobs </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => (navigation.push('Applied'))} >
                    <Text> Applied Jobs  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={ () => (navigation.push('Info')) } >
                    <Text> Profile Info </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={ () => navigation.push('Logout') } >
                    <Text> Logout </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
