import React from 'react';
import styles from './Navbar.stylesheet';
import Icon from 'react-native-vector-icons/AntDesign';

import {View, StyleSheet, Text} from 'react-native';

const NavBar = () => {
  return (
    <View style={styles.bar}>
      <Text style={styles.navText}>TV Shows</Text>
      <Text style={styles.navText}>Movies</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.navText}>Categories</Text>
        <Icon name="caretdown" size={15} color="white" />
      </View>
    </View>
  );
};

export default NavBar;
