import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';
import { ListItem } from './src/ListItem';

export default function App() {
  const [listItems, setListItems] = useState([]);

  const addItemToList = (title) => {
    setListItems((prev) => [...prev, {
      id: Date.now().toString(),
      title
    }]);
  }

  const deleteItem = (id) => {
    setListItems(prev => prev.filter(listItems => listItems.id !== id));
  }

  return (
    <View>
      <Navbar title="Todo app" />
      <View style={styles.container}>
        <AddTodo onSubmit={addItemToList} />
        <FlatList
          keyExtractor={item => item.id}
          data={listItems}
          renderItem={({ item }) => <ListItem title={item.title} id={item.id} onRemove={deleteItem} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
