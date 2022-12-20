
import {StyleSheet, Text, Image, View,Button,TextInput  } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
      <View>
        <Text>Witaj w aplikacji listy!</Text>
      </View>
      <View>      
        <Image
        style={styles.tinyLogo}
        source={require('./assets/sun.png')}
      />
      </View>
      <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder="Wpisz imię" />
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Anuluj" />
        <Button title="Dodaj" />
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
    justifyContent: 'space-evenly',
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
    padding: 10,
  },
});
