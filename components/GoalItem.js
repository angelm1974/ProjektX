import { View, StyleSheet,  Text } from 'react-native'
import React from 'react'

const GoalItem = () => {
  return (
    <View style={styles.item}>
    <Text style={styles.textItem}>{itemData.item.text}</Text>
  </View>
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