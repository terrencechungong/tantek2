import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
const TanTekLogo = require('../../../assets/images/onboarding-logo.png');

const EnableFaceId = () => (
  <View style={styles.container}>
    <Image source={TanTekLogo} style={styles.logo} />
    <Text style={styles.enableFaceId}>Enable Face Id?</Text>
    <View style={{ paddingTop: 50, width: '100%' }}>
      <OptionPill text="Yes" />
      <OptionPill text="No" />
    </View>
  </View>
);

function OptionPill(props) {
  let style;
  let textColor;
  if (props.text === 'No') {
    style = { backgroundColor: '#C4C4C4', borderColor: '#C4C4C4' };
    textColor = { color: 'black' };
  }

  return (
    <View style={[styles.pill, style]}>
      <Text style={[styles.continue, textColor]}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303234',
    alignItems: 'center',
  },
  pill: {
    width: '50%',
    marginBottom: 15,
    borderRadius: 50,
    alignSelf: 'center',
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
  enableFaceId: {
    color: 'white',
    fontSize: 34,
    paddingBottom: 80,
  },
  logo: { height: 175, width: 118, marginTop: 50, marginBottom: 20 },
});

export default EnableFaceId;
