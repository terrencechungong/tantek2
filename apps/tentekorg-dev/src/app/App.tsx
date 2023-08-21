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
import EnterPhoneNumber from './screens/authentication/EnterPhoneNumber';
import EnterCode from './screens/authentication/EnterCode';
import EnableFaceId from './screens/authentication/EnableFaceId';
import GreatJobScreen from './screens/onboarding/GreatJobScreen';
import CreateProfile from './screens/onboarding/CreateProfile';
import NameYourCircle from './screens/onboarding/NameYourCircle';
import CircleRole from './screens/onboarding/CircleRole';
import JoinCirlce from './screens/onboarding/JoinCircle';
import ShareCode from './screens/onboarding/ShareCode';

// send screenshots right now

// logo screen first all the time
// groups and not circles
// should be able to toggle between screens on map
// register before onboarding process. have option to stay signed in
// PeopleFinderSettings delete arrow, let it be a scroll

export const App = () => {
  return (
    <View style={styles.container}>
      <JoinCirlce />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default  App;
