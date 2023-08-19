import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      
    </View>
  );
};

const initialRegion = {
    latitude: 37.78825, // Dummy latitude
    longitude: -122.4324, // Dummy longitude
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  
  // Pinpoint marker
  const pinCoordinate = {
    latitude: 37.78825, // Dummy latitude
    longitude: -122.4324, // Dummy longitude
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
