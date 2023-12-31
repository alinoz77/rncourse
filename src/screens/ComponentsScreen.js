import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const greeting = <Text style={styles.subHeaderStyle}>Hi there!</Text>;
    return ( 
        <View>
            <Text style={styles.textStyle}>This is the ComponentsScreen</Text>
            {greeting}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;
