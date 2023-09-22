import React from "react";
import { Button, View, TouchableOpacity, Text, StyleSheet } from "react-native";

const HomeScreen = (props) => {
    return (
        <View>
            <Text style={styles.text}>Hi there?!</Text>
            <Button title="Components"
                onPress={() => {
                    console.log('Button pressed');
                    props.navigation.navigate('Components');
                }}
            />
            <Button title="List"
                onPress={() => {
                    console.log('List Button pressed');
                    props.navigation.navigate('List');
                }}
            />

            <Button title="Images"
                onPress={() => {
                    console.log('Images Button pressed');
                    props.navigation.navigate('Images');
                }}
            />

            <Button title="Counter" onPress={() => {
                console.log('Counter Button pressed');
                props.navigation.navigate('Counter');
            }} />

            <Button title="Colors" onPress={() => {
                console.log('Colors Button pressed');
                props.navigation.navigate('Colors');
            }} />

            <Button title="Square" onPress={() => {
                console.log('Square Button pressed');
                props.navigation.navigate('Square');
            }} />

            <Button title="Text" onPress={() => {
                console.log('Text Button pressed');
                props.navigation.navigate('Text');
            }} />

            <Button title="Box" onPress={() => {
                console.log('Box Button pressed');
                props.navigation.navigate('Box');
            }} />

            {/* <TouchableOpacity onPress={() => {
                console.log('List pressed');
                props.navigation.navigate('List');
              }}>
                <Text>List</Text>
              </TouchableOpacity> */}
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
});

export default HomeScreen;

