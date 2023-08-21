import React, { useRef, useState } from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const EnterCodeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.enterCode}>Enter Code</Text>
    <Text style={styles.smallerText}>An SMS code was sent to:</Text>
    <Text style={[styles.smallerText, { paddingBottom: 1 }]}>
      +903-932-8934
    </Text>
    <Text style={[styles.editNumber, { paddingBottom: 9 }]}>
      Edit Phone Number
    </Text>
    <EnterCode />
    <ContinuePill/>
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

const ContinuePill = () => (
  <View style={styles.pill}>
    <Text style={styles.continue}>Continue</Text>
  </View>
);

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
    paddingTop: 100,
    color: 'white',
    fontSize: 30,
    paddingLeft: 64,
    paddingBottom: 5,
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
  continue: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default EnterCodeScreen;
