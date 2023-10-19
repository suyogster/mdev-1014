import { Button, StyleSheet, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Button title='Layout 1' onPress={() => {}} />
      <Button title='Layout 2' onPress={() => {}} />
      <Button title='Layout 3' onPress={() => {}} />
      <Button title='Layout 4' onPress={() => {}} />
      <Button title='Layout 5' onPress={() => {}} />
      <Button title='Layout 6' onPress={() => {}} />
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
});
