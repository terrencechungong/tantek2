import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
const TanTekLogo = require('../../../assets/images/onboarding-logo.png');
const GradientOne = require('../../../assets/images2/get-started-gradient.png');
const GradientTwo = require('../../../assets/images2/get-started-gradient1.png');
const GradientThree = require('../../../assets/images2/get-started-gradient2.png');

function GetStartedScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={GradientOne}
        style={{ position: 'absolute', top: 0, right: 0, width: '100%' }}
      />
      <Image
        source={GradientTwo}
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
      <Image
        source={GradientThree}
        style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
      />
      <Text style={styles.TM}>
        TM
      </Text>
      <Image source={TanTekLogo} style={{ marginTop: 230 }} />
      <View style={styles.getStartedView}>
        <Text style={styles.getStarted}>Get Started</Text>
      </View>
      <Text style={{ color: 'white', paddingTop: 20, fontSize: 19 }}>
        Try for free today!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303234',
    justifyContent: 'center',
    alignItems: 'center',
  },
  getStarted: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 3,
    fontSize: 19,
    fontWeight: 'bold',
  },
  getStartedView: {
    marginTop: 50,
    width: 250,
    height: 40,
    backgroundColor: '#93C8D5',
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#5BB4C9',
  },
  TM: {
    position: 'absolute',
    top: 302,
    color: 'white',
    right: 90,
    fontWeight: '400',
  },
});

export default GetStartedScreen;
