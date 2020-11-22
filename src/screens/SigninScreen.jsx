import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthFrom'
import { Context as AuthContext } from '../context/AuthContext';
import NavLink from '../components/NavLink'
const SigninScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);

  return (
    <View style={styles.container}>
     <AuthForm 
     headerText="Sign In for Tracker" 
     errorMessage={state.errorMessage} 
     onSubmit={signin} 
     SubmitButtonText="Sign In"/>

    <NavLink 
    routeName="Signup"
    text="Don't have an account? Sign up insted."
    />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
