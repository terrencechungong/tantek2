import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import {
  faEnvelope,
  faEyeSlash,
  faPencilAlt,
  faWallet,
  faUsers,
  faTrashCan,
  faPhone,
  faExclamationTriangle,
  faIdCard,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
const cornerGradient = require('../../../assets/images/editprofilegradient.png');
const momWoods = require('../../../assets/images/mom-woods.png');
const emergencyIcon = require('../../../assets/images/grommet-icons_emergency.png');

function SingleContact() {
  return (
    <View style={styles.container}>
      <Image source={cornerGradient} />
      <View style={styles.overlay}>
        <Text style={styles.overlayText}>Contacts</Text>
      </View>
      <Image source={momWoods} style={styles.profilePhotoStyle} />
      <Text style={styles.contactName}>Mom Woods</Text>
      <Text style={[styles.contactName, styles.emergencyLabel]}>
        Emergency Contact
      </Text>
      <Columns />
      <InformationBox />
      <EditPencil />
      <DeleteContact />
    </View>
  );
}

const DeleteContact = () => (
  <View style={styles.pill}>
    <View
      style={{
        paddingLeft: 16,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}
    >
      <FontAwesomeIcon
        icon={faTrashCan}
        size={20}
        color="white"
        style={{ marginTop: 2 }}
      />
      <Text style={{ color: 'white', fontSize: 18, fontWeight: '300' }}>
        Delete Contact
      </Text>
    </View>
  </View>
);

const EditPencil = () => (
  <View style={styles.iconCircle}>
    <FontAwesomeIcon icon={faPencilAlt} size={17} color="white" />
  </View>
);

function Columns(props) {
  return (
    <View style={styles.container3}>
      <Column text="Location" />
      <Column text="Message" />
      <Column text="Wallet" />
    </View>
  );
}

function Column(props) {
  const { text, padding } = props;
  let icon;
  switch (text) {
    case 'Location':
      icon = <FontAwesomeIcon icon={faEyeSlash} size={35} color="black" />;
      break;
    case 'Message':
      icon = <FontAwesomeIcon icon={faEnvelope} size={35} color="black" />;
      break;
    case 'Wallet':
      icon = <FontAwesomeIcon icon={faWallet} size={35} color="black" />;
  }

  return (
    <View style={styles.box}>
      <View style={{ paddingTop: 15 }}>{icon}</View>
      <Text style={styles.boxText}>{props.text}</Text>
    </View>
  );
}

function InformationBox() {
  const textArray = [
    'Mom',
    'Emergency Contact',
    '123-456-7891',
    'Alerts On',
    'Guardian Access',
  ];
  return (
    <View style={styles.container2}>
      {textArray.map((text, i) => (
        <InformarionRow key={i} text={text} index={i} />
      ))}
    </View>
  );
}

function InformarionRow(props) {
  let icon;
  switch (props.text) {
    case 'Mom':
      icon = faUsers;
      break;
    case '123-456-7891':
      icon = faPhone;
      break;
    case 'Alerts On':
      icon = faExclamationTriangle;
      break;
    case 'Guardian Access':
      icon = faIdCard;
  }

  return (
    <View style={[styles.row, props.index === 4 && { borderBottomWidth: 1 }]}>
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          size={25}
          color="black"
          style={{ marginLeft: 17, marginRight: 15 }}
        />
      )}
      {icon == null && (
        <Image
          source={emergencyIcon}
          style={{ marginLeft: 13, marginRight: 11 }}
        />
      )}
      <Text style={styles.rowText}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  overlay: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 13,
  },
  profilePhotoStyle: {
    position: 'absolute',
    alignSelf: 'center',
    top: 60,
    borderRadius: 100,
    width: 110,
    height: 110,
  },
  container3: {
    height: 60,
    flexDirection: 'row', // Horizontal layout
    justifyContent: 'center', // Distribute boxes evenly along the row,
    marginTop: 4,
  },
  box: {
    width: 100, // Equal width for each box
    height: 80, // Equal height for each box
    backgroundColor: '#E0E0E0', // Example background color
    borderRadius: 10,
    marginHorizontal: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
  },
  overlayText: {
    color: 'black',
    fontSize: 25,
  },
  container2: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  row: {
    width: '100%',
    height: 45,
    borderTopWidth: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: 'lightgrey',
  },
  useInfoText: {
    fontWeight: 'bold',
    color: 'black',
  },
  ageCircle: {
    position: 'absolute',
    top: 197,
    left: 268,
    width: 70,
    height: 70,
  },
  contactName: {
    position: 'absolute',
    top: 170,
    fontSize: 25,
    left: 122,
    color: 'black',
  },
  iconCircle: {
    width: 30,
    height: 30,
    borderRadius: 20,
    position: 'absolute',
    top: 144,
    left: 220,
    borderWidth: 2,
    backgroundColor: 'black',
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emergencyLabel: {
    top: 200,
    color: 'red',
    left: 126,
    fontWeight: 'bold',
    fontSize: 15,
  },
  rowText: {
    color: 'black',
    fontSize: 18,
  },
  boxText: {
    fontWeight: '400',
    color: 'black',
    fontSize: 16,
    paddingBottom: 5,
  },
  pill: {
    width: '80%',
    borderRadius: 20,
    alignSelf: 'center',
    bottom: 20,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    height: 31,
    backgroundColor: 'black',
  },
});

export default SingleContact;
