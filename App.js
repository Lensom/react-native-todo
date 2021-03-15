import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';
import { ListItem } from './src/ListItem';

export default function App() {
  const [listItems, setListItems] = useState([]);

  const addTodo = (title) => {
    setListItems((prev) => [...prev, {
      id: Date.now().toString(),
      title
    }]);
  }

  return (
    <View>
      <Navbar title="Todo app" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <View>
          {listItems.map(({ title, id }) => <ListItem title={title} key={id} />)}
        </View>
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
