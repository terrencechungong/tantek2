import React from 'react';
import { TextInput } from 'react-native';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const EnterPhoneNumber = () => (
  <View style={styles.container}>
    <Text style={styles.available}>Available in City Name</Text>
    <Text style={styles.promptName}>
      {' '}
      Enter your phone number to sign in or sign up
    </Text>
    <TextInput style={styles.textInput} placeholder="Phone Number" />
    <Text style={{ color: 'white', width: 150, fontSize: 10, paddingTop: 30 }}>
      By continuing, you agree to our{' '}
      <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}>
        Terms of Use
      </Text>{' '}
      and{' '}
      <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}>
        Privacy Policy
      </Text>
    </Text>
    {/* center the top line */}
    <View style={styles.pill}>
      <Text
        style={{
          alignSelf: 'center',
          color: 'white',
          fontSize: 25,
          fontWeight: 'bold',
        }}
      >
        Send Code
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303234',
    alignItems: 'center',
  },
  available: {
    color: 'white',
    paddingTop: 54,
    paddingRight: 50,
    fontSize: 25,
  },
  promptName: {
    color: 'white',
    paddingTop: 9,
    paddingRight: 15,
  },
  textInput: {
    height: 60,
    width: 330,
    alignSelf: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 20,
    fontColor: '#C4C4C4',
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 30,
  },
  pill: {
    width: '80%',
    marginTop: 133,
    borderRadius: 50,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 50,
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#93C8D5',
    borderWidth: 2,
    borderColor: '#5BB4C9',
  },
});

export default EnterPhoneNumber;
