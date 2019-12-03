import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const ListScreen = () => {
    const friends = [
        {name: 'friend1'},
        {name: 'friend2'},
        {name: 'friend3'},
        {name: 'friend4'},
        {name: 'friend5'},
        {name: 'friend6'},
        {name: 'friend7'},
        {name: 'friend8'},



    ]

    return (
        <FlatList 
            data={friends} 
            renderItem={({item})=>{
                return <Text>{item.name}</Text>;
            }}

        />
    )
    
    
}

const styles = StyleSheet.create({})

export default ListScreen;