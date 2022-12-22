//Sekcja importów
//Importujemy biblioteki Reacta, komponenty z biblioteki React Native oraz nasze własne komponenty
import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';

//Importujemy nasz komponent Tytul - został wyciiągnięty z głównej funkcji App do oddzielnego pliku
import Tytul from './components/Tytul';
import Logo from './components/Logo';
import GoalInput from './components/GoalInput';

//Główna funkcja aplikacji od niej zaczyna się cała aplikacja
//W nawiasach kwadratowych podajemy wszystkie komponenty, które chcemy wykorzystać w naszej aplikacji
//te komponenty nazywamy "hookami"
export default function App() {

const [courseGoals, setCourseGoals] = useState([]);

function deleteGoalHandler(id) {
  setCourseGoals((aktualneCele) => {
    return aktualneCele.filter((cel) => cel.id !== id);
  });
  console.log('Kasujemy');
}



  //Funkcja, która będzie wywoływana przy kliknięciu przycisku "Dodaj"
  //Funkcja ta dodaje do listy celów nowy cel
  //Funkcja po zajęciach została zmodyfikowana tak, aby dodawała równiż do każdego celu 
  //unikalny identyfikator
  function addGoal(enteredGoal) {
    setCourseGoals((aktualneCele) =>
      [...aktualneCele, { text: enteredGoal, id: Math.random().toString() }
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
      <GoalInput onAddGoal={addGoal} />


      {/* Komponent FlatList służy do wyświetlania listy elementów
      W atrybucie data podajemy tablicę, która zawiera elementy, które mają być wyświetlone
      W atrybucie renderItem podajemy funkcję, która będzie wywoływana przy każdym elemencie tablicy
      W atrybucie keyExtractor podajemy funkcję, która będzie wywoływana przy każdym elemencie tablicy
      aby wygenerować unikalny identyfikator dla każdego elementu tablicy */}
      <View style={styles.GoalsContainer}>
      <FlatList data={courseGoals}
        renderItem={(itemData) => {
          return (
            <GoalItem 
              text={itemData.item.text} 
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler}/>
          );
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        alwaysBounceVertical={false} style={styles.inputContainer} />
      </View>
    </View>
  );
}

// Definicja obiektu styles dla naszej aplikacji

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  GoalsContainer: {
    marginTop: 20,
    flex: 5,
  },
}); 
