import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export class Tytul extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Witaj w aplikacji listy!</Text>
            </View>
        )
    }
}

export default Tytul

const styles=StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',

},

});