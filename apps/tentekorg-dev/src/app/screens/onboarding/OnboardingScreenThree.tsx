import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
const CenterButton = require('../../../assets/images2/person-center-business.png');
const PeopleGroup = require('../../../assets/images2/peoplegroup-onboarding.png');

function OnboardingScreenThree() {
  const coordintePoints = [
    [149, 23, 73, 73],
    [187, 268, 55, 55],
    [509, 32, 95, 95],
    [470, 275, 65, 65],
  ];

  return (
    <View style={styles.container1}>
      <View style={styles.container}>
        <Image source={CenterButton} style={styles.centerButton} />
        <View style={[styles.dashedLine]} />
        <View
          style={[styles.secondDashedLine, { top: 255, right: 83, width: 40 }]}
        />
        <View style={[styles.thirdDashedLine]} />
        <View style={[styles.fourthDashedLine]} />
        {coordintePoints.map((coord) => (
          <Image
            source={PeopleGroup}
            style={{
              position: 'absolute',
              width: coord[2],
              height: coord[3],
              top: coord[0],
              left: coord[1],
            }}
          />
        ))}
        <Text style={styles.mainText}>
          Immediately notify your family and friends when you’re in danger or
          concerned about your safety.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#303234',
  },
  container: {
    flex: 1,
    marginLeft: 20,
    backgroundColor: '#303234',
    justifyContent: 'center',
  },
  centerButton: {
    position: 'absolute',
    top: 250,
    left: 90,
    zIndex: -1,
  },
  dashedLine: {
    width: 80,
    transform: [{ rotate: '57deg' }],
    position: 'absolute',
    top: 250,
    left: 59,
    height: 2,
    borderRadius: 1, // Half of the height to create a rounded look
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dashed',
  },
  secondDashedLine: {
    transform: [{ rotate: '120deg' }],
    position: 'absolute',
    height: 2,
    borderRadius: 1, // Half of the height to create a rounded look
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dashed',
  },
  thirdDashedLine: {
    width: 45,
    transform: [{ rotate: '417deg' }],
    position: 'absolute',
    top: 454,
    right: 70,
    height: 2,
    borderRadius: 1, // Half of the height to create a rounded look
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dashed',
  },
  fourthDashedLine: {
    width: 80,
    transform: [{ rotate: '297deg' }],
    position: 'absolute',
    top: 480,
    left: 80,
    height: 2,
    borderRadius: 1, // Half of the height to create a rounded look
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dashed',
  },
  mainText: { width: 300, fontSize: 19, color: 'white', position: 'absolute', bottom: 50, left: 40, justifyContent: 'center' },
});

export default OnboardingScreenThree;
