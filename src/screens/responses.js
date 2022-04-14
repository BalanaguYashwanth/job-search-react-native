import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView, Linking } from 'react-native'
import { Card, Title, Button } from 'react-native-paper'
import axios from 'axios'
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

export default function responses() {

    const [datas, setDatas] = useState()

    useEffect(() => {

        async function load()
        {
            await axios.get('https://particle-ae921-default-rtdb.firebaseio.com/job.json')
            .then(async res => {
                let arr = []
                console.log(res.data)
                let result = res.data
                const id=await AsyncStorage.getItem('recruiterId')
                for (let obj in result) {
                    if(result[obj].recruiterId==id && result[obj].recruiterId!='' )
                    {
                        result[obj].key = obj
                        arr.push(result[obj])
                    }
                   
                }
                setDatas(arr)

            })
            .catch(err => console.log(err))
        }

        load()
        
    }, [])

    return (
        <View>
            <ScrollView>
                {
                    datas && datas.map((data, index) => (

                        <Card key={index} style={{ margin: 10 }}  >
                            <Card.Title  title={data.company} />
                            <Card.Content >
                                <Title>Name:- {data.personName} </Title>
                                <Title>Email:-{data.emailId} </Title>
                                {data.projectLink && <Title>ProjectLink :- {data.projectLink} </Title>}
                                <Title>QuizAns:- {data.quizAns ? data.quizAns : 'NA'} </Title>
                               
                                <Title style={{ color: 'blue' }} onPress={() => Linking.openURL(data.video)} >VideoLink<Icon name="external-link" size={20} color="blue" />  </Title>
                            </Card.Content>

                        </Card>
                    ))
                }
            </ScrollView>   
        </View>
    )
}
