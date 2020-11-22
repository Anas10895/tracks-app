import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import AuthForm from '../components/AuthFrom'
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  console.log(state)
  return (
    <View style={styles.container}>
     <AuthForm headerText="Sign Up for Tracker" 
     errorMessage={state.errorMessage} 
     onSubmit={signup} 
     SubmitButtonText="Sign UP"/>
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
      <Spacer>
      <Text style={styles.link}>Alredy have an acount? Sign in insted</Text>

      </Spacer>
      </TouchableOpacity>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

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

export default SignupScreen;
