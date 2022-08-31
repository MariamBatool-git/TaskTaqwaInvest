import React from "react";
import axios from "axios";
import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Button } from "react-native";
//import { Alert } from "react-native";

import SuperTokens from 'supertokens-react-native';
SuperTokens.init({
    apiDomain: "http://localhost:3000",
    apiBasePath: "/"
});
const SignIn = ()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const API_URL = 'http://localhost:3000/signin'

    const handleSubmit = (e) => {
        console.log("button pressed")
        var data = {
            "email": {email},
            "password": {password}
         }
         
         var sendData = () => {
            axios.post(url, data)
               .then(res => console.log('Data send'))
               .catch(err => console.log(e))
            }
    };
    return(
        <View style = {styles.container}>
            <View style = {styles.insideContainer}>
            <Text style = {styles.title}>
                    Sign In
                </Text>
                <View style = {styles.inputContainer}>
                    <TextInput
                        style = {styles.email}
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        keyboardType="email-address"/>
                </View>
                <View style = {styles.inputContainer}>
                    <TextInput
                        style = {styles.password}
                        secureTextEntry={true}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        keyboardType="email-address"/>
                </View>
                <View style = {styles.buttonContainer}>
                    <Button
                        style = {styles.button}
                        title="Sign In"
                        onPress={(e) => handleSubmit(e)}
                        color= {'#2C3333'}
                    />
                </View>
                <Text style = {styles.or}>
                    OR
                </Text>
                <View style = {styles.iconContainer}>
                    <Image
                        style = {styles.icon}
                        source={require('../assets/google.png')}
                    />
                    <View style = {styles.iconSeparator}></View>
                    <Image
                    style = {styles.icon}
                    source = {require('../assets/facebook.png')}/>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container : {
        flex : 1,justifyContent : 'center', alignItems : 'center'
    },
    insideContainer : {
        height : 400,
        width : 300,
        alignItems : 'center',
        elevation : 5,
        backgroundColor : "#E7F6F2",
        shadowColor : "#2C3333",
        shadowOpacity: 0.8,
    },
    title : {
        textAlign : 'center',
        fontSize : 24,
        fontWeight : '800',
        marginTop : 30
    },
    inputContainer : {
        marginTop : 30,
        elevation : 2,
        width : 260,
        height : 50
    },
    email : {
      
    },
    buttonContainer : {
        paddingTop : 20,
        width : 150
    },
    button : {
    },
    or : {
        fontSize : 20
    },
    icon : {
        width : 30,
        height : 30
    },
    iconContainer : {
        flexDirection : 'row',
        justifyContent : "space-between"
    },
    iconSeparator : {
        width : 10,
        height : 30
    }
});
export default SignIn;