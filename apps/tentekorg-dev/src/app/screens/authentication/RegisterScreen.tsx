import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { registerIcons } from 'apps/tentekorg-dev/src/assets/icons/RegisterIcons';

function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.registerText}>Register</Text>
      <SignInWithAndroid />
      {registerIcons.map((icon, index) => (
        <SignInComponent key={index} icon={icon} />
      ))}
      <TermsAndConditions />
    </View>
  );
}

const SignInWithAndroid = () => (
  <View style={styles.androidRegisterView}>
    <Text style={styles.androidRegisterText}>Sign in with Android</Text>
  </View>
);

const SignInComponent = (props) => (
  <View style={styles.facebookRegisterView}>
    <FontAwesomeIcon icon={props.icon.src} color="white" size={30} />
    <Text style={styles.OAuthregisterText}>{props.icon.name}</Text>
  </View>
);

const TermsAndConditions = () => (
  <Text style={{color:'white', fontSize: 12, marginHorizontal: 45, marginTop: 80}}>
    By signing up you agree to our{' '}
    <Text
      style={{textDecorationColor: 'white', textDecorationLine: 'underline' }}>
      Terms & Conditions Copy
    </Text>
  </Text>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303234',
  },
  registerText: {
    textTransform: 'uppercase',
    color: '#85C3D2',
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 60,
    paddingLeft: 30,
  },
  androidRegisterView: {
    backgroundColor: 'black',
    width: '87%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginLeft: 25,
  },
  androidRegisterText: {
    color: 'white',
    fontSize: 23,
  },
  facebookRegisterView: {
    width: '87%',
    height: 50,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: 40,
    marginLeft: 25,
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
  },
  OAuthregisterText: {
    color: 'white',
    marginLeft: 50,
    fontWeight: 'light',
    fontSize: 23,
  },
});

export default RegistrationScreen;
