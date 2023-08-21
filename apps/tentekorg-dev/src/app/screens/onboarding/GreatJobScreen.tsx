import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import HomeScreenHeader from '../components/HomeScreenHeader';
import BottomTabs from "../components/BottomTabs";
const GreatJobGradientOne = require('../../../assets/images2/great-job-gradient1.png');
const GreatJobGradientTwo = require('../../../assets/images2/great-job-gradient2.png');

const GreatJobScreen = () => ( 
    <View style={styles.container}>
        <View style={{position: 'absolute', top:0, width:'100%'}}>
        <HomeScreenHeader/>
        </View>
        <Text style={styles.text}>Great Job!</Text>
        <Text style={[styles.text, {marginBottom:70}]}> Now let’s set up your profile!</Text>
        <Image source={GreatJobGradientOne} style={{position:'absolute',left:0,bottom:0}}/>
        <Image source={GreatJobGradientTwo} style={{position:'absolute',right:0,bottom:0, zIndex:-1}}/>
        <Footer/>
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
        backgroundColor: "#303234",
        justifyContent: 'center',
        alignContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 25,
        alignSelf: 'center',
        paddingBottom: 30
    }
});

export default GreatJobScreen;