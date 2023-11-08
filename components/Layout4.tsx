import React, {useState} from 'react';
import { StyleSheet, View, Text, FlatList} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';

export default function Layout4() {
  const [todos, setTodos] = useState([
    { text: '1. Cross-platform Development', key: '1'},
    { text: '2. Intro to Android Development', key: '2'},
    { text: '3. Intro to iOS Development', key: '3'},
    { text: '4. Mobile App Portfolio', key: '4'},
    { text: '5. App Design and Interfaces', key: '5'},
    { text: '6. Entrepreneurship for Mobile', key: '6'},
    { text: '7. Mobile Data Management', key: '7'}
  ]);

  const pressHandler = (key:string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }
  return (
  <View style={styles.container}>
    <Header />
    <View style={styles.content}>
      {} 
     <View style={styles.list}>
      <FlatList
        data={todos}
        renderItem={({item}) => (
          <TodoItem item={item} pressHandler={pressHandler}/>
        )}
      />
     </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 2,
  }

});
``