import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TurnOnLocation = () => (
  <View style={styles.container}>
    <Text style={{ color: '#FFFFFF', position: 'absolute', top: 80, fontSize:22 }}>Location Services Must Be On</Text>
    <View style={{ width: '80%', paddingLeft: 20, marginBottom:60 }}>
      <Text style={{ color: '#FFFFFF', fontSize: 23, paddingTop: 40 }}>
        To use TanTek your location must be{' '}
        <Text style={{ color: '#93C8D5', fontWeight: 'bold' }}>turned on</Text>{' '}
        Update your settings to continue.
      </Text>
      <Text style={{ color: '#FFFFFF', fontSize: 23, paddingTop: 40 }}>
        {
          'Settings > TanTek Tap Location Access Click on Permissions > Location.'
        }
      </Text>
      <Text style={{ color: '#FFFFFF', fontSize: 23, paddingTop: 40 }}>
        Select Allow all the time or Allow only while using the app.
      </Text>
    </View>
    <View style={styles.getStartedView}>
        <Text style={styles.getStarted}>Get Started</Text>
      </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303234',
    alignItems: 'center',
    justifyContent: 'center',
  },
  getStarted: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 3,
    fontSize: 19,
    fontWeight: 'bold',
  },
  getStartedView: {
    position: 'absolute',
    bottom: 60,
    width: 250,
    height: 40,
    backgroundColor: '#93C8D5',
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#5BB4C9',
  },
});

export default TurnOnLocation;
