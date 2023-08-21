import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

function CircleRole() {
  const roles = [
    'Mom',
    'Dad',
    'Son / Daughter / Child',
    'Grandparent',
    'Partner / Spouse',
    'Friend',
    'Other',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.text}>How would you describe your</Text>
        <Text style={styles.text}>role in this Cirlce?</Text>
      </View>
      {roles.map((role) => (
        <Pressable>
          {(state) => <Role key={role} pressed={state.pressed} text={role} />}
        </Pressable>
      ))}
      <NextButton/>
    </View>
  );
}

const Role = ({pressed, text}) => (
  <View style={[styles.role, pressed && {backgroundColor:'white'}]}>
    <Text style={styles.roleText}>{text}</Text>
  </View>
);

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
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303234',
  },
  text: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: '400',
  },
  textView: {
    paddingTop: 60,
    paddingBottom: 20,
  },
  role: {
    width: '80%',
    height: 50,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#8DCBDA',
    justifyContent: 'center',
  },
  roleText: {
    color: '#8DCBDA',
    fontSize: 20,
    alignSelf: 'center',
  },
  nextButton: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 40,
    right: 20,
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

export default CircleRole;
