import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
const TanTekLogo = require('../../../assets/images/onboarding-logo.png');
const TopGradient = require('../../../assets/images2/top-gradient1.png');
const TopGradientTwo = require('../../../assets/images2/top-gradient2.png');
const TopGradientThree = require('../../../assets/images2/top-gradient3.png');
const CenterButton = require('../../../assets/images2/center-button.png');
const handImage = require('../../../assets/images/hand-image.png');

const OnboardingScreenTwo = () => (
  <View style={styles.container}>
    <Image source={TopGradient} style={styles.images} />
    <Image source={TopGradientTwo} style={styles.images} />
    <Image source={TopGradientThree} style={styles.rightImages} />
    <Image style={styles.hand} source={handImage} />
    <Image source={CenterButton} style={styles.centerButton} />
    <View style={styles.middleTextView}>
      <Text style={[styles.middleText, { paddingLeft: 14 }]}>
        Safety with the
      </Text>
      <Text style={styles.middleText}>Press of a Button</Text>
    </View>
    <View
      style={{
        width: '80%',
        position: 'absolute',
        bottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Text style={{ color: 'white' }}>Skip</Text>
      <Text style={{ color: 'white' }}>
        Next
      </Text>
      </View>
      <FontAwesomeIcon icon={faArrowRight} size={17} color="white" style={styles.arrow}/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303234',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleText: {
    color: 'white',
    fontSize: 26,
  },
  middleTextView: {
    position: 'absolute',
    top: 550,
  },
  hand: { position: 'absolute', bottom: 40, right: 0 },
  images: { position: 'absolute', top: 0, left: 0 },
  rightImages: { position: 'absolute', top: 0, right: 0 },
  centerButton: { position: 'absolute', top: 250, zIndex: -1, opacity: 0.3 },
  arrow: {position: 'absolute', bottom: 10, right: 10}
});

export default OnboardingScreenTwo;
