import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthFrom'
import { Context as AuthContext } from '../context/AuthContext';
import NavLink from '../components/NavLink'
const SignupScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);

  console.log(state)
  return (
    <View style={styles.container}>
     <AuthForm 
     headerText="Sign In for Tracker" 
     errorMessage={state.errorMessage} 
     onSubmit={signin} 
     SubmitButtonText="Sign In"/>

    <NavLink 
    routeName="Signup"
    text="Alredy have an account? Sign up insted."
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
