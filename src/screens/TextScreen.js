import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { set } from "react-native-reanimated";

const TextScreen = () => {
    const [name, setName] = useState('');
    return (
        <View>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => {
                    setName(newValue);
                    console.log(name);

                }}
            />
            {/* <Text>Text Screen text: {name} </Text> */}
            {name.length < 5 ? <Text>Password must be longer than 5 characters</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        padding: 5,
        borderColor: "black",
        borderWidth: 1
    }
});

export default TextScreen;