import React,{useContext} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Button} from 'react-native-elements'
import { Context as AuthContext } from '../context/authContext';

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);

    return (
    <View>
        <Text style={{fontSize:48}}>AccountScreen</Text>
        <Button title='Sign out' onPress={signout}/>
    </View>

    )
}

const styles = StyleSheet.create({

})

export default AccountScreen;