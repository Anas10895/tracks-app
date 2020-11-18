import React,{useState} from 'react'
import {View, StyleSheet} from 'react-native'
import {Text, Button, Input} from 'react-native-elements'
import Spacer from '../Spacer'
const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassowrd] = useState('')
    console.log(email, password)
    return (
        <View style={styles.container}>
            <Spacer>
            <Text h3>Signup for Tracker</Text>
            </Spacer>

            <Spacer>            
            <Input label="Email"
             onChangeText={setEmail}
             autoCapitalize='none'
            autoCorrect={false}/>
            </Spacer>

            <Spacer>            
            <Input label="Password"
            secureTextEntry
             onChangeText={setPassowrd}
              autoCapitalize='none'
               autoCorrect={false}/>
            </Spacer>


            <Spacer>
            <Button title="Signup"/>
            </Spacer>



        </View>

    )
}

const styles = StyleSheet.create({
container:{
    
    flex:1,
    justifyContent:'center',
    marginBottom:250,
    
}
})
SignupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };
export default SignupScreen;