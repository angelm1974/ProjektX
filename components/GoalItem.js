import { View, StyleSheet,  Text,Pressable } from 'react-native'
import React from 'react'

function GoalItem(props) {


  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
    <View style={styles.item}>
    <Text style={styles.textItem}>{props.text}</Text>
    </View>
    </Pressable>
  )
}

export default GoalItem

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'darkblue',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 6,
        borderRadius: 15,
        color: 'white',
      },
      textItem: {
        color: 'white',
      },
});