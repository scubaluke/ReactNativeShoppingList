import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {uuid} from 'uuidv4';
import Header from './components/Header';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    // {id: uuid(), text: 'Eggs'},
    // {id: uuid(), text: 'Bred'},
    // {id: uuid(), text: 'Cheese'},
  ]);
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
