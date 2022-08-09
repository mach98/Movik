import React from "react";

import { View, StyleSheet, Text} from 'react-native';


const NavBar = () => {
    return(
        <View style={styles.bar}>
            <Text style={styles.navText}>TV Shows</Text>
            <Text style={styles.navText}>Movies</Text>
            <Text style={styles.navText}>Categories</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bar: {
        alignItems: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
        marginBottom: 10,
    },
    navText: {
        color: 'white'
    }
});

export default NavBar;