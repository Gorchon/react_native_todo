import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

interface TodoItem {
  key: string;
  title: string;
}

const App: React.FC = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  const addItemHandler = (itemTitle: string) => {
    setTodoList(currentList => [...currentList, { key: Math.random().toString(), title: itemTitle }]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do List App</Text>
      <TodoInput onAddItem={addItemHandler} />
      <FlatList
        data={todoList}
        renderItem={({ item }) => <TodoItem title={item.title} />}
        ListEmptyComponent={<Text style={styles.emptyList}>No items yet!</Text>}
        contentContainerStyle={todoList.length === 0 && styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyList: {
    fontSize: 16,
    color: '#555',
    fontStyle: 'italic',
  },
});

export default App;
