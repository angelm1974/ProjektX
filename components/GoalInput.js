import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const GoalInput = () => {
    return (
        <View>
            <View style={styles.inputContainer}>
                <TextInput onChangeText={textHandler} style={styles.input} placeholder="Wpisz cel" />
            </View>
            <View style={styles.buttonsContainer}>
                <Button title="Anuluj" />
                <Button onPress={addGoal} title="Dodaj" />
            </View>
        </View>
    )
}

export default GoalInput