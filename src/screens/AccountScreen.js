import React,{useContext} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Button} from 'react-native-elements'
import { Context as AuthContext } from '../context/authContext';
import { SafeAreaView } from "react-navigation";
import Spacer from '../components/Spacer'

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);

    return (
    <SafeAreaView forceInset={{top:'always'}}>
        <Text style={{fontSize:48}}>AccountScreen</Text>
        <Spacer>

        <Button title='Sign out' onPress={signout}/>
        </Spacer>
    </SafeAreaView>

    )
}

const styles = StyleSheet.create({

})

export default AccountScreen;