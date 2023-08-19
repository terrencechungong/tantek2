import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { bottomTabIcons } from '../../../assets/icons/BottomTabIcons';
import { StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const BottomTabs = ({icons}) => {
    const [activeTab, setActiveTab] = useState('Map');

    const Icon = ({icon}) => (
      <View>
        <FontAwesomeIcon icon={icon.src} size={30} color={icon.inactive} />
      </View>
    )

  return (
    <View style={styles.container}>
      {bottomTabIcons.map((icon, index) => (
        <Icon key={index} icon={icon}/>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#282a36',
        height: 50,
        paddingTop: 7,
    }
});

export default BottomTabs