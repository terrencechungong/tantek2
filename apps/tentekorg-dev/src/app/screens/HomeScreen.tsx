import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import HomeScreenHeader from './components/HomeScreenHeader';
import { SafeAreaView } from 'react-native';
import BottomTabs from './components/BottomTabs';
import { bottomTabIcons } from '../../assets/icons/BottomTabIcons';

function HomeScreen() {
  return (
  <View style={styles.container}>
    <HomeScreenHeader />
    {/* Content for the top view */}

    <View style={styles.scrollContainer}>
      {/* Scrollable content goes here */}
    </View>

    <BottomTabs icons={bottomTabIcons} />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: 'white', // Adjust as needed
  },
  bottomView: {
    height: 100,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
