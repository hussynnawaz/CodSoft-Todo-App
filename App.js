import React from 'react';
import { View, StyleSheet } from 'react-native';
import TodoList from './TodoList';

const App = () => {
  return (
    <View style={styles.todoApp}>
      <TodoList />
    </View>
  );
};

const styles = StyleSheet.create({
  todoApp: {
    flex: 1,
    backgroundColor: 'linear-gradient(90deg, rgba(48, 16, 255, 1) 0%, rgba(100, 115, 255, 1) 100%)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
