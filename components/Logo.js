import React, { Component } from 'react'
import { Image, View,  StyleSheet} from 'react-native'

/* Komponent Image służy do wyświetlania obrazków ustawionych na stałe i pobieranych z zewnętrznych źródeł
W atrybucie source podajemy ścieżkę do obrazka */

export default function Logo() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.tinyLogo}
                    source={require('./../assets/sun.png')}
                />
            </View>
        )
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
       
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
});
 