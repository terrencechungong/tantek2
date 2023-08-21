import React, { useRef, useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
} from 'react-native';

const JoinCirlce = () => (
  <View style={styles.container}>
    <View style={{ paddingBottom: 40, paddingTop: 50 }}>
      <Text style={styles.enterCode}>Joining a Circle? Enter your</Text>
      <Text style={styles.enterCode}>invite code</Text>
    </View>
    <EnterCode />
    <Text
      style={{
        color: 'white',
        alignSelf: 'center',
        paddingTop: 40,
        fontSize: 15,
        width: '77%',
      }}
    >
      Tip: You may need to ask the Circle creator for the code.
    </Text>
    <SubmitPill />
    {/* <ContinuePill /> */}
    <BottomComponent />
  </View>
);

function EnterCode() {
  const [code, setCode] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  const handleCodeChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (index < 3 && value !== '') {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <View style={styles.codeContainer}>
      {code.map((digit, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputRefs.current[index] = ref)}
          style={styles.input}
          value={digit}
          onChangeText={(value) => handleCodeChange(index, value)}
          keyboardType="numeric"
          maxLength={1}
        />
      ))}
    </View>
  );
}

const SubmitPill = () => (
  <View style={[styles.contiuePill, {backgroundColor: 'grey', borderColor: 'grey'}]}>
    <Text style={styles.continue}>Submit</Text>
  </View>
);

const ContinuePill = () => (
  <View style={styles.pill}>
    <Text style={styles.continue}>Create a new Circle</Text>
  </View>
);

const BottomComponent = () => {
  return (
    <KeyboardAvoidingView
      style={styles.newCodeView}
      behavior="padding" // Adjust behavior based on your requirements
    >
      <Text style={{ color: 'white', fontSize: 26, fontWeight: '800', paddingBottom: 5 }}>
        Don't have a code?
      </Text>
      <Text style={{ color: 'white', fontSize: 16, fontWeight: '400' }}>
        We'll give you a code to share.
      </Text>
      <ContinuePill/>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#303234',
    flex: 1,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 24,
    width: 60,
    backgroundColor: 'white',
    height: 60,
    textAlign: 'center',
    borderWidth3: 2,
    borderRadius: 10,
    borderColor: 'black',
    marginHorizontal: 5,
  },
  enterCode: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  smallerText: {
    color: 'white',
    paddingLeft: 66,
    paddingBottom: 5,
    fontSize: 16,
  },
  editNumber: {
    color: '#5BB4C9',
    paddingLeft: 66,
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
  contiuePill: {
    width: '80%',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 40,
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#93C8D5',
    borderWidth: 2,
    borderColor: '#5BB4C9',
  },
  continue: {
    alignSelf: 'center',
    color: '#303234',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottomView: {
    alignSelf: 'flex-end', // Aligns to the bottom of the screen
    width: '100%',
    backgroundColor: 'lightgray',
    padding: 10,
  },
  newCodeView: {
    width: '100%',
    height: 200,
    backgroundColor: 'black',
    alignItems: 'center',
    marginTop: 181,
  }
});

export default JoinCirlce;
