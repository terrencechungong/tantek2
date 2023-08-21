import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { TextInput } from "react-native";
import { Text, View, StyleSheet, Image } from "react-native";

const NameYourCircle = () => ( 
    <View style={styles.container}>
        <Text style={styles.text}>Give your Circle a name</Text>
        <TextInput style={styles.input} placeholder="Example: Family" placeholderTextColor="white"/>
        <NextButton/>
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
        backgroundColor: "#303234",
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 30,
        paddingVertical: 60,
        fontWeight: '400',
    },
    input: {
        borderBottomWidth: 2,
        backgroundColor: 'rgba(48, 50, 52, 0.5)',
        width: '80%',
        color: 'white',
        textAlign: 'center',
        fontSize: 22,
    },
    nextButton: {
        position: 'absolute',
        flexDirection: 'row',
        bottom: 40,
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

export default NameYourCircle;