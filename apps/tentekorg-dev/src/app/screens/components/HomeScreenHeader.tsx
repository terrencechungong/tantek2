import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import TanTekTLogo from '../../../assets/images/tantek-T-logo.svg';
import Svg, { Circle } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const HomeScreenHeader = () => {
  return (
      <View style={styles.container}>
        <Svg width={50} height={100}>
          <TanTekTLogo />
        </Svg>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282a36'
  }
});

export default HomeScreenHeader;
