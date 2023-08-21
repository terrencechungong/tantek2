import React, { useRef, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Animated, PanResponder } from 'react-native';

function HomeScreen() {
  const translateY = useRef(new Animated.Value(0)).current;
  const [isScrollableOpen, setIsScrollableOpen] = useState(false);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0 && !isScrollableOpen) {
          translateY.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.vy > 0.5 && !isScrollableOpen) {
          Animated.timing(translateY, {
            toValue: 300,
            useNativeDriver: true,
          }).start();
          setIsScrollableOpen(true);
        } else {
          Animated.timing(translateY, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
          setIsScrollableOpen(false);
        }
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
      </View>
      <View style={styles.nonScrollable}>
        <Text style={styles.nonScrollableText}>Non-Scrollable Content</Text>
      </View>
      <Animated.View
        style={[
          styles.draggableBar,
          { transform: [{ translateY }] },
        ]}
        {...panResponder.panHandlers}
      />
      <View style={styles.scrollableContainer}>
        <ScrollView
          style={styles.scrollableContent}
          contentContainerStyle={styles.contentContainer}
          scrollEnabled={isScrollableOpen}
        >
          {Array.from({ length: 20 }, (_, index) => (
            <View key={index} style={styles.box}>
              <Text style={styles.boxText}>Box {index + 1}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 100,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  draggableBar: {
    height: 4,
    backgroundColor: 'yellow',
    alignSelf: 'center',
    marginBottom: 10,
  },
  nonScrollable: {
    height: 100,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nonScrollableText: {
    fontSize: 16,
  },
  scrollableContainer: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  scrollableContent: {
    padding: 20,
  },
  contentContainer: {
    paddingBottom: 80,
  },
  box: {
    backgroundColor: 'lightgray',
    padding: 20,
    marginBottom: 10,
  },
  boxText: {
    fontSize: 16,
  },
  footer: {
    height: 80,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
