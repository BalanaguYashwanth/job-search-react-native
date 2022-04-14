import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView, Linking } from 'react-native'
import { Card, CardTitle, CardContent, Title } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function applied() {

    const [company, setCompany] = useState('')
    const [details, setDetails] = useState()

    useEffect(() => {

        async function loaddata() {
            await axios.get('https://particle-ae921-default-rtdb.firebaseio.com/job.json')
                .then(async res => {
                    const result = res.data
                    const id = await AsyncStorage.getItem('user-id')
                    let arr = []
                    for (var obj in result) {
                        if (result[obj].id == id && result[obj].id!='') {
                            result[obj].key = obj
                            arr.push(result[obj])
                        }
                    }
                    setDetails(arr)
                })
                .catch(err => console.log(err))
        }
        loaddata()
    }, [])


    return (
        <View>
            <ScrollView>
                {
                    details && details.map((data, index) => (
                        <Card key={index} style={{ margin: 10 }}>
                            <Card.Content >
                                <Title>Company:{data.company}  </Title>
                                <Title style={{ color: 'blue' }} onPress={() => Linking.openURL(data.video)} >VideoLink<Icon name="external-link" size={20} color="blue" />  </Title>
                            </Card.Content>
                        </Card>
                    ))
                }
            </ScrollView>
        </View>
    )
}

