import React from 'react'
import {View, Text, StyleSheet,Button} from 'react-native'

const SigninScreen = ({navigation}) => {
    return (
        
    <>
        <Text style={{fontSize:48}}>SigninScreen</Text>
        <Button onPress={() =>navigation.navigate('Signup') } title="go to Signup"/>
    </>


    )
}

const styles = StyleSheet.create({

})

export default SigninScreen;