import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
const TanTekLogo = require('../../../assets/images/onboarding-logo.png');
const OnboardingCornerGradientOne = require('../../../assets/images/onboardingCornerGradient1.png');
const cornerGradientTwo = require('../../../assets/images/onboardingCornerGradient2.png');

const LogoScreen = () => (
  <View style={styles.container}>
    <Image source={TanTekLogo} />
    <Text style={styles.headerText}>
      TanTek Technologies
    </Text>
    <View style={styles.footerText}>
      <Text style={{ color: '#FFFFFF' }}>© 2022 Tan Tek Technologies</Text>
      <Text style={{ paddingLeft: 50, color: '#FFFFFF' }}>TanTekb.1</Text>
    </View>
    <Image style={styles.cornerGradient} source={OnboardingCornerGradientOne}/>
    <Image style={styles.cornerGradient} source={cornerGradientTwo}/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303234',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: { position: 'absolute', bottom: 20, zIndex: 1 },
  headerText: { color: '#E8E8E8', fontSize: 26, paddingTop: 40 },
  cornerGradient: {position: 'absolute', bottom: 0, right: 0}
});

export default LogoScreen;
