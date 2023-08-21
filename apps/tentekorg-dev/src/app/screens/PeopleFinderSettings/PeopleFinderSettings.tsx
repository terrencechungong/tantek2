import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import BottomTabs from '../components/BottomTabs';
import HomeScreenHeader from '../components/HomeScreenHeader';
import { ScrollView } from 'react-native';
const alertPerson = require('../../../assets/images/mockAlertPic.png');
const heartIcon = require('../../../assets/images/Heart.png');

function PeopleFinderSettings() {
  return (
    <View style={styles.container}>
      <Header />
      <Card
        title="Latest Reports:"
        buttonText="Check On Ash"
        description="Ash recently left Wine Bar at 1:04AM"
        image={alertPerson}
      />
      <Card
        title="Missing Persons:"
        buttonText="Help Us Locate Loved Ones"
        image={heartIcon}
      />
      <Footer />
    </View>
  );
}

function Card(props) {
  const { title, buttonText, description, image } = props;
  let photoIconStyle;

  switch (title) {
    case 'Latest Reports:':
      photoIconStyle = [
        styles.photos,
        { borderRadius: 100, top: 60, width: 70, height: 70 },
      ];
      break;
    default:
      photoIconStyle = styles.photos;
  }

  return (
    <View style={styles.box}>
      <Text style={styles.titleStyles}>{title}</Text>
      {title === 'Latest Reports:' && <ArrowButton />}
      {description && <Text style={styles.description}>{description}</Text>}
      <Image source={image} style={photoIconStyle} />
      <View style={styles.pill}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </View>
    </View>
  );
}

const ArrowButton = () => (
  <View style={styles.circle}>
    <FontAwesomeIcon icon={faArrowRight} size={17} color="white" />
  </View>
);

const Footer = () => (
  <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
    <BottomTabs />
  </View>
);

const Header = () => (
  <View style={{ top: 0, width: '100%' }}>
    <HomeScreenHeader />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#9dd2df',
  },
  box: {
    width: '87%',
    borderRadius: 15,
    height: Dimensions.get('window').height / 3 - 30,
    backgroundColor: '#ffffffb2',
    marginTop: 20,
    borderColor: 'white',
    borderWidth: 2,
  },
  titleStyles: {
    fontSize: 22,
    paddingLeft: 20,
    paddingTop: 15,
    color: 'black',
    fontWeight: '500',
  },
  pill: {
    width: '80%',
    marginTop: 133,
    borderRadius: 20,
    alignSelf: 'center',
    height: 31,
    backgroundColor: 'white',
  },
  buttonText: {
    alignSelf: 'center',
    paddingTop: 7,
    fontSize: 15,
    color: 'black',
    fontWeight: '400',
  },
  description: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 15,
    position: 'absolute',
    paddingTop: 145,
    fontWeight: '600',
  },
  photos: {
    position: 'absolute',
    alignSelf: 'center',
    top: 74,
    width: 98,
    height: 88,
  },
  circle: {
    width: 27,
    height: 27,
    right: 20,
    top: 20,
    position: 'absolute',
    borderRadius: 30,
    backgroundColor: '#9DD2DF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PeopleFinderSettings;
