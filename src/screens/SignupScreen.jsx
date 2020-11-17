import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const SigninScreen = ({navigation}) => {
    return (
        <>
        <Text style={{fontSize:48}}>SignupScreen</Text>
        <Button onPress={() =>navigation.navigate('Signin') } title="go to Signup"/>
        <Button onPress={() =>navigation.navigate('mainFlow') } title="go to Main flow"/>

    </>

    )
}

const styles = StyleSheet.create({

})

export default SigninScreen;