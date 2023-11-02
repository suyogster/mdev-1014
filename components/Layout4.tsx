import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Layout4() {
  return (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text>Hello, World!</Text>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  }
});
``