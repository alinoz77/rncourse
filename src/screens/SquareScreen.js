import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";

import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

// const setColor = (color, change) => {
//     if (color + change > 255) {
//         return color;
//     }
//     if (color + change < 0) {
//         return color;
//     }

//     return color + change;
// };

const reducer = (state, action) => {
    // state === { red: number, green: number, blue: number };
    // action === { type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15 };

    switch (action.type) {
        case 'change_red':
            if (state.red + action.payload > 255 || state.red + action.payload < 0) {
                return state;
            }
            return { ...state, red: state.red + action.payload };
        case 'change_green':
            if (state.green + action.payload > 255 || state.green + action.payload < 0) {
                return state;
            }
            return { ...state, green: state.green + action.payload };
        case 'change_blue':
            if (state.blue + action.payload > 255 || state.blue + action.payload < 0) {
                return state;
            }
            return { ...state, blue: state.blue + action.payload };
        default:
            return state;
    }
};

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    return (
        <View>
            <ColorCounter onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })}
                color="Red" />
            <ColorCounter onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })}
                color="Green" />
            <ColorCounter onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })}
                color="Blue" />
            <View style={{ height: 100, width: 100, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})` }} />
        </View>
    );


    // const [red, setRed] = useState(0);
    // const [green, setGreen] = useState(0);
    // const [blue, setBlue] = useState(0);

    // return (
    //     <View>
    //         <ColorCounter onIncrease={() => setRed(setColor(red, COLOR_INCREMENT))}
    //             onDecrease={() => setRed(setColor(red, -1 * COLOR_INCREMENT))}
    //             color="Red" />
    //         <ColorCounter onIncrease={() => setGreen(setColor(green, COLOR_INCREMENT))}
    //             onDecrease={() => setGreen(setColor(green, -1 * COLOR_INCREMENT))}
    //             color="Green" />
    //         <ColorCounter onIncrease={() => setBlue(setColor(blue, COLOR_INCREMENT))}
    //             onDecrease={() => setBlue(setColor(blue, -1 * COLOR_INCREMENT))}
    //             color="Blue" />
    //         <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
    //     </View>
    // );
};

const styles = StyleSheet.create({});

export default SquareScreen;
