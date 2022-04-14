import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { TextInput, RadioButton, Button } from 'react-native-paper'


export default function jobdata({ navigation }) {

    const [checked, setChecked] = useState({})
    const [datas, setDatas] = useState()
    const [project, setProject] = useState('')
    const [form, setForm] = useState()
    const [company, setCompany] = useState()
    const [name, setName] = useState('')
    const [projectlink, setProjectlink] = useState()
    const [info, setInfo] = useState(null)
    const [optional, setOptional] = useState(null)
    const [optionalInput, setOptionalInput] = useState(null)
    const [choices, setChoices] = useState(true)
    const [recruiterId, setRecruiterId] = useState('')
    //{ form1: { id: 1, key: "form1", opt1: "Programming language", opt2: "Non Programming language", opt3: "Science", opt4: "Social", question: "Where array will use" }, }

    useEffect(() => {
        let data = navigation.getParam('companyname')
        //console.log('datas', data)
        setForm(data.form)
        setCompany(data.companyname)
        setProject(data.project)
        setDatas(data)
        setOptional(data.optional)
        setRecruiterId(data.recruiterId)
    }, [])


    function forms(form) {
        let arrs = []
        for (let obj in form) {
            arrs.push(form[obj])
        }

        function submit() {
            if (name != '') {
                navigation.push('camera', { company: company, personName: name, quizAns: checked, projectLink: projectlink, optionalInput: optionalInput, recruiterId: recruiterId })
                //console.log(checked)
            }
            else {
                setInfo('please fillup all details')
                setTimeout(function () {
                    setInfo(null)
                }, 3000)
            }
        }

        function checkList(id, value) {
            //console.log(checked) 
            let obj = { ...checked }
            obj[id] = value
            setChecked(obj)
            //console.log(checked)
            //console.log('updated',obj)
        }

        return (
            <View  >
                {
                    choices && form && Object.entries(form).map(([key, value]) => (
                        <View key={value.id} style={{ margin: 10,flex:1,flexDirection:'column' }} >
                            {/* <Text> {value.id}  { value.question  } </Text> */}
                            <Text style={{margin:10, fontSize:17}} >{value.id}. {value.question == 'Enter the question' ? setChoices(false) : value.question}    </Text>

                            <View style={{flexDirection:'row'}}>
                            <RadioButton value='A' color='black' onPress={() => checkList(value.id, 'A')} status={checked[value.id] == 'A' ? 'checked' : 'unchecked'} /> 
                            <Text style={{fontSize:17, margin:4}} >  {value.opt1} </Text>
                            </View>

                            <View style={{flexDirection:'row'}}>
                            <RadioButton value='B' color='black' onPress={() => checkList(value.id, 'B')} status={checked[value.id] == 'B' ? 'checked' : 'unchecked'} /> 
                            <Text style={{fontSize:17, margin:4}} >  {value.opt2} </Text>
                            </View>

                            <View style={{flexDirection:'row'}}>
                            <RadioButton value='C' color='black' onPress={() => checkList(value.id, 'C')} status={checked[value.id] == 'C' ? 'checked' : 'unchecked'} /> 
                            <Text style={{fontSize:17, margin:4}} >  {value.opt3} </Text>
                            </View>
                            
                            <View  style={{flexDirection:'row'}}>
                            <RadioButton value='D' color='black' onPress={() => checkList(value.id, 'D')} status={checked[value.id] == 'D' ? 'checked' : 'unchecked'} /> 
                            <Text  style={{fontSize:17, margin:4}}>  {value.opt4} </Text>
                            </View>

                            
                        </View>
                    ))

                }
                <Button onPress={submit} style={{ margin: 5 }} mode="contained" >  {'Create Short Video ->'} </Button>
                {/* <Text> {checked && checked} </Text> */}
            </View>
        )
    }

    return (
        <ScrollView>
            <View >

                {info && <Text style={{ textAlign: 'center', backgroundColor: 'grey' }} > {info} </Text>}

                <View style={{ margin: 5 }}>
                    <Text style={{ textAlign: 'center', alignItems: 'center', fontWeight: '500', fontSize: 30, margin: 5, marginBottom: 15 }} > </Text>

                    <Text style={{ marginLeft: 5,fontSize:17 }} > Name </Text>
                    <TextInput style={{ backgroundColor: '#ddddd' }} onChangeText={(val) => (setName(val))} />

                    <Text style={{ marginLeft: 5, marginTop: 15, fontSize:17 }} > {project} </Text>
                    {!!project && <TextInput multiline={true} style={{ backgroundColor: '#ddddd' }} onChangeText={(val) => (setProjectlink(val))} />}

                    <Text style={{ marginLeft: 5, marginTop: 15 }} > {optional} </Text>
                    {!!optional && <TextInput multiline={true} style={{ backgroundColor: '#ddddd' }} onChangeText={(val) => setOptionalInput(val)} />}

                    {forms(form)}
                </View>

            </View>
        </ScrollView>
    )
}

