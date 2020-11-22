import React,{useState} from 'react'
import { StyleSheet, View} from 'react-native'
import {Button, Text, Input} from 'react-native-elements'
import Spacer from './Spacer'

const AuthForm = ({headerText, errorMessage, onSubmit, SubmitButtonText}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
         <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {errorMessage ?  <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
       
  
      <Spacer>
        <Button title={SubmitButtonText} onPress={() => onSubmit({email, password})} />
      </Spacer>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginBottom: 250,
    },
    errorMessage:{
      fontSize:15,
      color:'red',
      marginLeft:15,
      marginTop:15
    },
    link:{
      color:'blue'
    }
  });
export default AuthForm;