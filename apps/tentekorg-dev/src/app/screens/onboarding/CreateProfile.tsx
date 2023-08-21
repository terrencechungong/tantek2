import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import HomeScreenHeader from '../components/HomeScreenHeader';
import BottomTabs from '../components/BottomTabs';
import { TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const TopGradient = require('../../../assets/images2/create-profile-gradient.png');
const People = require('../../../assets/images2/people-photo.png');

function CreateProfile() {
  return (
    <View style={styles.container}>
      <Header />
      <Image
        source={TopGradient}
        style={{ position: 'absolute', top: -20, width: '100%', zIndex: -1 }}
      />
      <Text style={styles.createProfile}>Create Profile</Text>
      {/* <Image source={People} style={{alignSelf: 'center'}} /> */}
      <Form />
      <NextButton />
      <Footer />
    </View>
  );
}

const NextButton = () => (
  <View style={styles.nextButton}>
    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
      Next
    </Text>
    <ArrowButton />
  </View>
);

const ArrowButton = () => (
    <View style={styles.circle}>
      <FontAwesomeIcon icon={faArrowRight} size={17} color="white" />
    </View>
  );

const Header = () => (
  <View style={{ position: 'absolute', top: 0, width: '100%' }}>
    <HomeScreenHeader />
  </View>
);

const Form = () => (
  <View style={styles.form}>
    <View style={styles.halfBlockContainer}>
      <View style={styles.halfBlocks}>
        <TextInput placeholder="First Name" style={styles.inputText} />
      </View>
      <View style={styles.halfBlocks}>
        <TextInput placeholder="Last Name" />
      </View>
    </View>
    <View style={styles.singleLine}>
      <TextInput placeholder="Address" />
    </View>
    <View style={styles.halfBlockContainer}>
      <View style={styles.halfBlocks}>
        <TextInput placeholder="City" />
      </View>
      <View style={styles.halfBlocks}>
        <TextInput placeholder="State" />
      </View>
    </View>
    <View style={styles.singleLine}>
      <TextInput placeholder="Age" />
    </View>
  </View>
);

const Footer = () => (
  <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
    <BottomTabs />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303234',
    justifyContent: 'center',
    alignContent: 'center',
  },
  form: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
  },
  halfBlocks: {
    backgroundColor: '#C4C4C4',
    width: '48%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  halfBlockContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  singleLine: {
    backgroundColor: '#C4C4C4',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 45,
    marginTop: 10,
    borderRadius: 30,
  },
  inputText: {
    color: 'black',
  },
  createProfile: {
    position: 'absolute',
    top: 80,
    left: 125,
    width: '100%',
    zIndex: 1,
    color: 'white',
    fontSize: 25,
    alignSelf: 'center',
    paddingBottom: 30,
  },
  nextButton: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 70,
    right: 30,
    zIndex: 1,
  },
  circle: {
    width: 27,
    height: 27,
    borderRadius: 30,
    marginHorizontal: 14,
    backgroundColor: '#9DD2DF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CreateProfile;
