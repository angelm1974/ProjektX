//Sekcja importów
//Importujemy biblioteki Reacta, komponenty z biblioteki React Native oraz nasze własne komponenty
import { useState } from 'react';
import { StyleSheet, Text, Image, View, Button, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import GoalItem from './components/GoalItem';

//Importujemy nasz komponent Tytul - został wyciiągnięty z głównej funkcji App do oddzielnego pliku
import Tytul from './components/Tytul';
import Logo from './components/Logo';

//Główna funkcja aplikacji od niej zaczyna się cała aplikacja
//W nawiasach kwadratowych podajemy wszystkie komponenty, które chcemy wykorzystać w naszej aplikacji
//te komponenty nazywamy "hookami"
export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);


  //Funkcja, która będzie wywoływana przy każdej zmianie tekstu w TextInput
  //W parametrze text znajduje się aktualny tekst wpisany w TextInput
  //Funkcja ta ustawia stan enteredGoal na aktualny tekst wpisany w TextInput
  const textHandler = (text) => {
    setEnteredGoal(text);
  }

  //Funkcja, która będzie wywoływana przy kliknięciu przycisku "Dodaj"
  //Funkcja ta dodaje do listy celów nowy cel
  //Funkcja po zajęciach została zmodyfikowana tak, aby dodawała równiż do każdego celu 
  //unikalny identyfikator
  function addGoal() {
    setCourseGoals((aktualneCele) =>
      [...courseGoals, { text: enteredGoal, id: Math.random().toString() }
      ]);
  };
  return (
    //Wewnątrz głównej funkcji App znajduje się cała logika naszej aplikacji
    //Wewnątrz funkcji App możemy wykorzystywać wszystkie hooki, które zostały zadeklarowane w nawiasach kwadratowych
    //Wewnątrz funkcji App możemy wykorzystywać wszystkie komponenty z biblioteki React Native
    //Wewnątrz funkcji App możemy wykorzystywać wszystkie nasze własne komponenty
    //Wewnątrz funkcji App możemy wykorzystywać wszystkie funkcje, które zostały zadeklarowane wewnątrz funkcji App
    //Wewnątrz funkcji App możemy wykorzystywać wszystkie zmienne, które zostały zadeklarowane wewnątrz funkcji App
    //Wewnątrz funkcji App możemy wykorzystywać wszystkie stałe, które zostały zadeklarowane wewnątrz funkcji App
    //Wewnątrz funkcji App możemy wykorzystywać wszystkie obiekty, które zostały zadeklarowane wewnątrz funkcji App
    //Stylowanie komponentów odbywa się za pomocą obiektu styles
    //W obiekcie styles definiujemy wszystkie style, które chcemy wykorzystać w naszej aplikacji
    <View style={styles.container}>
      <Tytul />
      <Logo />

      {/* Komponent TextInput służy do wyświetlania pola tekstowego, 
      w którym użytkownik może wpisywać tekst */}
      <View style={styles.inputContainer}>
        <TextInput onChangeText={textHandler} style={styles.input} placeholder="Wpisz cel" />
      </View>

      {/* Komponent Button służy do wyświetlania przycisku,
      Uwaga w bieżącym widoku są dwa przyciski, które mają różne funkcje
      w którym użytkownik może kliknąć i wykonać jakąś akcję */}
      <View style={styles.buttonsContainer}>
        <Button title="Anuluj" />
        <Button onPress={addGoal} title="Dodaj" />
      </View>

      {/* Komponent FlatList służy do wyświetlania listy elementów
      W atrybucie data podajemy tablicę, która zawiera elementy, które mają być wyświetlone
      W atrybucie renderItem podajemy funkcję, która będzie wywoływana przy każdym elemencie tablicy
      W atrybucie keyExtractor podajemy funkcję, która będzie wywoływana przy każdym elemencie tablicy
      aby wygenerować unikalny identyfikator dla każdego elementu tablicy */}
      <FlatList data={courseGoals}
        renderItem={(itemData) => {
          return (
            <GoalItem />
          );
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        alwaysBounceVertical={false} style={styles.inputContainer} />

    </View>
  );
}

// Definicja obiektu styles dla naszej aplikacji

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

});

