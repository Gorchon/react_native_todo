import React from "react"
import { Text, StyleSheet } from 'react-native';

interface Props {
  title: string;
}

const TodoItem: React.FC<Props> = ({ title }) => {
  return (
    <Text style={styles.item}>{title}</Text>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f8f8f8',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eee',
    width: '100%',
  },
});

export default TodoItem;
