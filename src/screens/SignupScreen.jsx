import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Text, Button, Input} from 'react-native-elements'
import Spacer from '../Spacer'
const SigninScreen = ({navigation}) => {
    return (
        <>
            <Spacer>
            <Text h3>Signup for Tracker</Text>
            </Spacer>

            <Spacer>            
            <Input label="Email"/>
            </Spacer>

            <Spacer>            
            <Input label="Password"/>
            </Spacer>


            <Spacer>
            <Button title="Signup"/>
            </Spacer>



        </>

    )
}

const styles = StyleSheet.create({

})

export default SigninScreen;