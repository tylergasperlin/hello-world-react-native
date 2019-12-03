import React from 'react'
import {Text, StyleSheet, View, FlatList} from 'react-native'

const ComponentScreen = () => {
    const greeting = 'Hello world component screen'
    const name = 'Tyler'
    return (
        <View>
            <Text style={styles.textStyle}>{greeting}</Text>
            <Text style={styles.subHeaderStyle}>{name}</Text>

        </View>

    )


}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40
        
    },
    subHeaderStyle: {
        fontSize: 20
    }

})

export default ComponentScreen;