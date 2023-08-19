import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
const cornerGradient = require('../../../assets/images/editprofilegradient.png');
const profilePhoto = require('../../../assets/images/mock-profilePhoto.png');
const ageCircle = require('../../../assets/images/age-circle-icon.png');

function EditAccountScreen() {
  return (
    <View style={styles.container}>
      <Image source={cornerGradient} />
      <View style={styles.overlay}>
        <Text style={styles.overlayText}>Edit Account</Text>
      </View>
      <Image source={profilePhoto} style={styles.profilePhotoStyle} />
      <Image source={ageCircle} style={styles.ageCircle} />
      <Text style={styles.ageText}>26</Text>
      <InformationBox />
      {/* make info box a bit darker */}
      <EditPencil/>
    </View>
  );
}

const EditPencil = () => (
  <View style={styles.iconCircle}>
    <FontAwesomeIcon icon={faPencilAlt} size={17} color="white" />
  </View>
);

const InformationBox = () => (
  <View style={styles.container2}>
    <View style={styles.row}>
      <Text>FIRST NAME</Text>
      <Text style={styles.useInfoText}>Ellen</Text>
    </View>
    <View style={styles.row}>
      <Text>LAST NAME</Text>
      <Text style={styles.useInfoText}>Woods</Text>
    </View>
    <View style={styles.row}>
      <Text>BIRTHDAY</Text>
      <Text style={styles.useInfoText}>01-07-1996</Text>
    </View>
    <View style={styles.row}>
      <Text>PHONE NUMBER</Text>
      <Text style={styles.useInfoText}>301-442-7486</Text>
    </View>
    <View style={styles.row}>
      <Text>EMAIL</Text>
      <Text style={styles.useInfoText}>tc@gmail.com</Text>
    </View>
    <View style={styles.row}>
      <Text>PASSWORD</Text>
      <Text style={styles.useInfoText}>*********</Text>
    </View>
    <View style={[styles.row, {borderBottomWidth: 1}]}>
      <Text>FACE ID</Text>
      <Text style={styles.useInfoText}>ENABLED</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  overlay: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 13,
  },
  profilePhotoStyle: {
    position: 'absolute',
    alignSelf: 'center',
    top: 60,
    borderRadius: 100,
    width: 110,
    height: 110,
  },
  overlayText: {
    color: 'black',
    fontSize: 25,
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  row: {
    width: '100%',
    height: 40,
    borderTopWidth: 1,
    borderColor: 'lightgrey',
  },
  useInfoText: {
    fontWeight: 'bold',
    color: 'black',
  },
  ageCircle: {
    position: 'absolute',
    top: 197,
    left: 268,
    width: 70,
    height: 70,
  },
  ageText: {
    position: 'absolute',
    top: 209,
    fontSize: 35,
    left: 284,
    color: 'black',
  },
  iconCircle: {
    width: 30,
    height: 30,
    borderRadius: 20,
    position: 'absolute',
    top: 144,
    left : 220,
    borderWidth: 2,
    backgroundColor: 'black',
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EditAccountScreen;
