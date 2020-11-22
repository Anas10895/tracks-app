import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthFrom'
import { Context as AuthContext } from '../context/AuthContext';
import NavLink from '../components/NavLink'
const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  console.log(state)
  return (
    <View style={styles.container}>
     <AuthForm 
     headerText="Sign Up for Tracker" 
     errorMessage={state.errorMessage} 
     onSubmit={signup} 
     SubmitButtonText="Sign UP"/>

    <NavLink 
    routeName="Signin"
    text="Alredy have an account? Sign in insted."
    />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
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
