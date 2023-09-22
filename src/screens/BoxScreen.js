import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Child #1</Text>
            <Text style={styles.textStyle}>Child #2</Text>
            <Text style={styles.textStyle}>Child #3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        height: 200,
        borderWidth: 3,
        borderColor: "black",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textStyle: {
        borderWidth: 3,
        borderColor: "red",
        // marginVertical: 20,
        marginHorizontal: 20,
        // paddingVertical: 20,
        // paddingHorizontal: 20,
        // padding: 20,
        flex: 1,
        alignSelf: "flex-start"
    }
});

export default BoxScreen;
