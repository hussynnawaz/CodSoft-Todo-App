import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TodoForm from './TodoForm';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return (
      <TodoForm edit={edit} onSubmit={submitUpdate} />
    );
  }

  return (
    <View>
      {todos.map((todo, index) => (
        <View
          style={todo.isComplete ? styles.todoRowComplete : styles.todoRow}
          key={index}
        >
          <TouchableOpacity onPress={() => completeTodo(todo.id)}>
            <Text>{todo.text}</Text>
          </TouchableOpacity>
          <View style={styles.icons}>
            <TouchableOpacity onPress={() => removeTodo(todo.id)}>
              <Icon name="delete" style={styles.deleteIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setEdit({ id: todo.id, value: todo.text })}>
              <Icon name="pencil" style={styles.editIcon} />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  todoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 4,
    padding: 16,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 118, 20, 1)',
  },
  todoRowComplete: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 4,
    padding: 16,
    borderRadius: 5,
    backgroundColor: 'rgba(93, 12, 255, 1)',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 24,
  },
  deleteIcon: {
    marginRight: 5,
    color: '#fff',
  },
  editIcon: {
    color: '#fff',
  },
});

export default Todo;
