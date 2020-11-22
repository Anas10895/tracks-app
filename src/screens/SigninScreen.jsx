import React from 'react'
import {View, Text, StyleSheet,Button,TouchableOpacity} from 'react-native'
import Spacer from '../components/Spacer'
const SigninScreen = ({navigation}) => {
    return (
        
    <>
        <Text style={{fontSize:48}}>SigninScreen</Text>
        <Button onPress={() =>navigation.navigate('Signup') } title="go to Signup"/>

        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
      <Spacer>
      <Text style={styles.link}>Alredy have an acount? Sign in insted</Text>

      </Spacer>
      </TouchableOpacity>
    </>


    )
}

const styles = StyleSheet.create({

})
SigninScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };
export default SigninScreen;