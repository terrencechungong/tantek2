import React from 'react';
import { Dimensions, View } from 'react-native';
import { Text, StyleSheet, Image, TextInput } from 'react-native';
import HomeScreenHeader from '../components/HomeScreenHeader';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import BottomTabs from '../components/BottomTabs';
const topScreenGradient = require('../../../assets/images/top-screen-vector.png');
const heartIcon = require('../../../assets/images/Heart.png');
const misingPerson = require('../../../assets/images/exampledatabasepic.png');

function MissingPersonDataBase() {
  return (
    <View style={styles.container}>
      <HomeScreenHeader />
      <PageHeader />
      {/* this will be w scroll view */}
      <View>
        <MainContent />
      </View>
      <Footer />
    </View>
  );
}

const PageHeader = () => (
  <View>
    <Image source={topScreenGradient} style={{ width: '100%' }} />
    <TextInput style={styles.searchBar} />
  </View>
);

/* make the text input invisible and have a search icon in the middle of it
the text input design should be a view with a border radius and a background color */

function MainContent() {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={styles.date}>Daeete</Text>
      <Card />
    </View>
  );
}

function Card(props) {
  return (
    <View style={styles.box}>
      <View style={{width:'80%', justifyContent:'space-between', flexDirection:'row'}}>
      <Image source={misingPerson} />
        <View>
          <Text style={styles.titleStyles}>Name</Text>
          <View style={styles.pill} />
        </View>
      </View>
    </View>
  );
}

const Footer = () => (
  <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
    <BottomTabs />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9DD2DF',
  },
  searchBar: {
    position: 'absolute',
    width: '90%',
    height: 40,
    backgroundColor: '#FFFFFF66',
    borderRadius: 20,
    borderWidth: 1,
    top: 15,
    left: 20,
    borderColor: 'black',
  },
  mainContent: {
    position: 'absolute',
    top: 500,
  },
  box: {
    width: '87%',
    borderRadius: 15,
    height: Dimensions.get('window').height / 3 - 30,
    backgroundColor: '#ffffffb2',
    marginTop: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: 'white',
    borderWidth: 2,
  },
  pill: {
    width: 100,
    borderRadius: 20,
    height: 31,
    backgroundColor: 'white',
  },
  date: { color: 'black', fontSize: 20, fontWeight: 'bold' },
});

export default MissingPersonDataBase;
