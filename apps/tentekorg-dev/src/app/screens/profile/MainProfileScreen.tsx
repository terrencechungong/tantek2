import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import Svg from 'react-native-svg';
import LogIcon from '../../../assets/images/log-svg.svg';
import LocationsIcon from '../../../assets/images/locations-svg.svg';
import {
  faEnvelope,
  faQuestionCircle,
  faWallet,
  faShareAlt,
  faCommentAlt,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
const profilePhoto = require('../../../assets/images/mock-profilePhoto.png');
// TODO: Refactor all of this

function MainProfileScreen() {
  return (
    <View style={styles.container}>
      <ProfileHeader />
      <Rows text="Activity Log" />
      <Rows text="Locations" />
      <Columns />
      <ProfileBox />
    </View>
  );
}

function ProfileHeader(props) {
  return (
    <View style={styles.headerStyle}>
      <Image source={profilePhoto} style={{borderRadius:100, width:70, height:70}} />
      <Text style={{ fontSize: 30, color: 'black', paddingLeft: 13 }}>Eilieen Woods, 26</Text>
    </View>
  );
}

function ProfileBox(props) {
  return (
    <View style={styles.container3}>
      <View style={styles.header} />
      <View style={styles.row}>
        <FontAwesomeIcon
          icon={faEnvelope}
          size={25}
          color="black"
          style={{ marginLeft: 17 }}
        />
        <Text style={{ color: 'black', paddingLeft: 15, fontSize: 15 }}>
          MESSAGES
        </Text>
      </View>
      <View style={styles.row}>
        <FontAwesomeIcon
          icon={faShareAlt}
          size={25}
          color="black"
          style={{ marginLeft: 17 }}
        />
        <Text style={{ color: 'black', paddingLeft: 15, fontSize: 15 }}>
          SOCIAL SHARE
        </Text>
      </View>
      <View style={styles.row}>
        <FontAwesomeIcon
          icon={faCommentAlt}
          size={25}
          color="black"
          style={{ marginLeft: 17 }}
        />
        <Text style={{ color: 'black', paddingLeft: 15, fontSize: 15 }}>
          SUPPORT CHAT
        </Text>
      </View>
      <View style={styles.row}>
        <FontAwesomeIcon
          icon={faInfoCircle}
          size={25}
          color="black"
          style={{ marginLeft: 17 }}
        />
        <Text style={{ color: 'black', paddingLeft: 15, fontSize: 15 }}>
          LEGAL
        </Text>
      </View>
    </View>
  );
}

function Rows(props) {
  const icon =
    props.text === 'Locations' ? <LocationIcon /> : <ActivityLogIcon />;
  return (
    <View style={styles.rowStyle}>
      <Text style={styles.textStyle}>{props.text}</Text>
      {icon}
    </View>
  );
}

const LocationIcon = () => (
  <View>
    <Svg width={50} height={40}>
      <LocationsIcon />
    </Svg>
  </View>
);

const ActivityLogIcon = () => (
  <View>
    <Svg width={50} height={25}>
      <LogIcon />
    </Svg>
  </View>
);

function Columns(props) {
  return (
    <View style={styles.container2}>
      <Column text="Settings" />
      <Column text="Help" />
      <Column text="Wallet" />
    </View>
  );
}

function Column(props) {
  const { text, padding } = props;
  let icon;
  switch (text) {
    case 'Settings':
      icon = <FontAwesomeIcon icon={faCog} size={40} color="black" />;
      break;
    case 'Help':
      icon = (
        <FontAwesomeIcon icon={faQuestionCircle} size={40} color="black" />
      );
      break;
    case 'Wallet':
      icon = <FontAwesomeIcon icon={faWallet} size={40} color="black" />;
  }

  return (
    <View style={styles.box}>
      <View style={{ paddingTop: 10 }}>{icon}</View>
      <Text style={{ fontWeight: '500', color: 'black', fontSize: 18 }}>
        {props.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start', // Aligns children to the bottom of the container
    padding: 10,
  },
  rowStyle: {
    height: 60,
    backgroundColor: '#E0E0E0',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 10,
  },
  textStyle: {
    paddingLeft: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  box: {
    width: 100, // Equal width for each box
    height: 80, // Equal height for each box
    backgroundColor: '#E0E0E0', // Example background color
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
  },
  container2: {
    height: 60,
    flexDirection: 'row', // Horizontal layout
    justifyContent: 'space-between', // Distribute boxes evenly along the row,
    marginTop: 13,
  },
  container3: {
    marginTop: 50,
    backgroundColor: 'white',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: 'lightgray',
  },
  header: {
    backgroundColor: '#5BB4C9',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    marginTop: 10,
    height: 40,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    flexDirection: 'row',
  },
  headerStyle: {
    height: 100,
    marginBottom: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
  },
});

export default MainProfileScreen;
