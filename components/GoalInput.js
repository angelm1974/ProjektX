import { View, Text, TextInput, Button, StyleSheet,Modal,Image } from 'react-native'
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
    <View style={styles.Container}>
      <Image source={require('./../assets/cel.png')} style={{width: 80, height: 80, alignSelf: 'center', marginBottom: 50}} />
      <View style={styles.inputContainer}>
        <TextInput onChangeText={textHandler} style={styles.input} placeholder="Wpisz cel" />
      </View>  
      <View style={styles.ButtonsContainer}>
        <Button color='darkblue' onPress={props.onCancel} title="Anuluj" />
        <Button color='darkblue' onPress={addGoalHandler} title="Dodaj" />
      </View>
    </View>
</Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    paddingTop: 50,
    backgroundColor: 'darkviolet',

  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    padding: 8,
    borderRadius: 10,
    marginRight: 8,
    height: 40,
    color: 'white',
  },
  ButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '60%',
    paddingTop: 30,
  },
  btnStyle: {
    width: 260,
    borderRadius: 10,
    
  },
});