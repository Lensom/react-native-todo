import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export const ListItem = ({ title, id, onRemove }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => console.log('Pressed', title)}
      onLongPress={() => onRemove(id)}
    >
      <View style={styles.todo}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 10
  }
})