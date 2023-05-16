import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

interface Props {
  onAddItem: (itemTitle: string) => void;
}

const TodoInput: React.FC<Props> = ({ onAddItem }) => {
  const [todoItem, setTodoItem] = useState<string>('');

  const addTodoHandler = () => {
    onAddItem(todoItem);
    setTodoItem('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter todo item"
        style={styles.input}
        onChangeText={setTodoItem}
        value={todoItem}
      />
      <Button color={"black"} title="Add" onPress={addTodoHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  input: {
    width: '70%',
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
  },
  
});

export default TodoInput;
