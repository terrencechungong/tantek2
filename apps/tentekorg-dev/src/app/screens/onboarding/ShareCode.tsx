import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

const ShareCode = () => (
  <View style={styles.container}>
    <View style={styles.topView}>
      <Text style={styles.topText}>Share this invite code with your</Text>
      <Text style={styles.topText}>friends and family</Text>
    </View>
    <View style={styles.codeContainer}>
      <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold' }}>
        OPV - RDA
      </Text>
      <Text style={{ color: '#8DCBDA', fontWeight: 'bold' }}>
        This code will be active for 2 days
      </Text>
    </View>
    <BottomComponent />
  </View>
);

const ContinuePill = () => (
  <View style={styles.pill}>
    <Text style={styles.continue}>Share Code</Text>
  </View>
);

const BottomComponent = () => {
  return (
    <KeyboardAvoidingView
      style={styles.newCodeView}
      behavior="padding" // Adjust behavior based on your requirements
    >
      <ContinuePill />
      <Text style={{ color: 'white', fontSize: 20 }}>I'm done sharing</Text>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303234',
    alignItems: 'center',
  },
  topText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  topView: {
    paddingTop: 60,
    alignItems: 'center',
  },
  codeContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
    width: '85%',
    height: 90,
    borderRadius: 20,
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pill: {
    width: '80%',
    borderRadius: 50,
    alignSelf: 'center',
    bottom: 20,
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#93C8D5',
    borderWidth: 2,
    borderColor: '#5BB4C9',
  },
  continue: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  newCodeView: {
    width: '100%',
    height: 95,
    alignItems: 'center',
    bottom: 0,
    position: 'absolute',
  },
});

export default ShareCode;
