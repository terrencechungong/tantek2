/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef, useState } from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import RegistrationScreen from './screens/authentication/RegisterScreen';
import MainProfileScreen from './screens/profile/MainProfileScreen';
import EditAccountScreen from './screens/profile/EditAccountScreen';
import PeopleFinderSettings from './screens/PeopleFinderSettings/PeopleFinderSettings';
import SingleContact from './screens/contacts/SingleContact';
import MissingPersonDataBase from './screens/PeopleFinderSettings/MissingPersonDataBase';
import LogoScreen from './screens/onboarding/LogoScreen';
import OnboardingScreenTwo from './screens/onboarding/OnboardingScreenTwo';
import OnboardingScreenThree from './screens/onboarding/OnboardingScreenThree';
import GetStartedScreen from './screens/onboarding/GetStartedScreen';
import TurnOnLocation from './screens/locationservices/TurnOnLocation';

export const App = () => {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default  App;
