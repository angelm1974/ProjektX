import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React,{useState} from 'react'

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
        <View>
            <View style={styles.inputContainer}>
                <TextInput onChangeText={textHandler} style={styles.input} placeholder="Wpisz cel" />
                <Button onPress={addGoalHandler} title="Dodaj" />
            </View>
        </View>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: 'darkblue',

      },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      width: '70%',
      padding: 8,
      borderRadius: 10,
      marginRight: 8,

      },
      buttonsContainer: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },

});