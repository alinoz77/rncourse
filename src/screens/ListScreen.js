import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Friend #1', age: 20},
        {name: 'Friend #2', age: 21},
        {name: 'Friend #3', age: 22},
        {name: 'Friend #4', age: 23}
    ];
    return (
        <View>
            <FlatList data={friends} 
                renderItem={({item}) => {
                    return <Text>{item.name} - Age {item.age}</Text>;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});
export default ListScreen;
