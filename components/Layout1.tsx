import { StyleSheet, Text, View } from 'react-native';

export default function Layout1({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'black' }}>Hello</Text>
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
