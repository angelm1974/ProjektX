import { View, Text, TextInput, Button, StyleSheet,Modal } from 'react-native'
import React, { useState } from 'react'

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  //Funkcja, która będzie wywoływana przy każdej zmianie tekstu w TextInput
  //W parametrze text znajduje się aktualny tekst wpisany w TextInput
  //Funkcja ta ustawia stan enteredGoal na aktualny tekst wpisany w TextInput
  const textHandler = (text) => {
    setEnteredGoal(text);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }



  return (
    <Modal visible={props.visible} animationType="slide">
    <View>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={textHandler} style={styles.input} placeholder="Wpisz cel" />
      </View>  
      <View>
        <Button onPress={props.onCancel} title="Anuluj" />
        <Button onPress={addGoalHandler} title="Dodaj" />
      </View>
    </View>
</Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,

    paddingTop: 30,

  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    padding: 8,
    borderRadius: 10,
    marginRight: 8,
    height: 40,
  },


});