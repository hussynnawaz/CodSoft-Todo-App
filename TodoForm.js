import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = text => {
    setInput(text);
  };

  const handleSubmit = () => {
    if (!input) {
      return;
    }

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput('');
  };

  return (
    <View style={styles.todoForm}>
      {props.edit ? (
        <>
          <TextInput
            placeholder='Update your item'
            value={input}
            onChangeText={handleChange}
            style={styles.todoInputEdit}
            ref={inputRef}
          />
          <TouchableOpacity onPress={handleSubmit} style={styles.todoButtonEdit}>
            <Text>Update</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TextInput
            placeholder='Add a todo'
            value={input}
            onChangeText={handleChange}
            style={styles.todoInput}
            ref={inputRef}
          />
          <TouchableOpacity onPress={handleSubmit} style={styles.todoButton}>
            <Text>Add todo</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  todoForm: {
    marginBottom: 32,
  },
  todoInput: {
    padding: 14,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#5d0cff',
    width: 320,
    backgroundColor: 'transparent',
    color: 'black',
  },
  todoInputEdit: {
    padding: 14,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#149fff',
    width: 320,
    backgroundColor: 'transparent',
    color: 'black',
  },
  todoButton: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: 'linear-gradient(90deg, rgba(93, 12, 255, 1) 0%, rgba(155, 0, 250, 1) 100%)',
    alignItems: 'center',
  },
  todoButtonEdit: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: 'linear-gradient(90deg, rgba(20, 159, 255, 1) 0%, rgba(17, 122, 255, 1) 100%)',
    alignItems: 'center',
  },
});

export default TodoForm;
