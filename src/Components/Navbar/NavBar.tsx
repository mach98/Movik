import React from "react";
import Icon from 'react-native-vector-icons/AntDesign';

import { View, StyleSheet, Text} from 'react-native';


const NavBar = () => {
    return(
        <View style={styles.bar}>
            <Text style={styles.navText}>TV Shows</Text>
            <Text style={styles.navText}>Movies</Text>
            <View style={{flexDirection:'row'}}>
            <Text style={styles.navText}>Categories</Text>
            <Icon name="caretdown" size={15} color="white"/>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    bar: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
        marginBottom: 10,
        position: 'absolute',
        zIndex: 1,
        left:0,
        right: 0
    },
    navText: {
        color: 'white'
    }
});

export default NavBar;