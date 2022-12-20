
import { useState } from 'react';
import {StyleSheet, Text, Image, View,Button,TextInput, FlatList,TouchableOpacity  } from 'react-native';
import Tytul from './components/Tytul';
import { DATA } from './DATA';


export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const Item = ({ title }) => (
    <TouchableOpacity>
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  
  const textHandler = (text) => {
    setEnteredGoal(text);
  }

  const addGoal = () => {
    setCourseGoals([...courseGoals,enteredGoal]) ;
  };
  return (
    <View style={styles.container}>
      <Tytul />
      <View>      
        <Image
        style={styles.tinyLogo}
        source={require('./assets/sun.png')}
      />
      </View>
      <View style={styles.inputContainer}>
      <TextInput onChangeText={textHandler} style={styles.input} placeholder="Wpisz cel" />
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Anuluj" />
        <Button onPress={addGoal} title="Dodaj" />
      </View>
      <View style={styles.inputContainer}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',

    padding: 20,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  inputContainer: {
    width: '90%',
  },
  buttonsContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: 'darkblue',
    borderRadius: 15,
    padding: 10,
  },
  item: {
    backgroundColor: 'lightblue',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 6,
    borderRadius: 15,
  },
});

