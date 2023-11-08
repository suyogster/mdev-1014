import { StyleSheet, View, Text } from 'react-native';

export default function Header() {
  return (
    <View style={styles.hdr}>
      <Text style={styles.title}>MDEV SEM 1 MODULES</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  hdr: {
    height: 100,
    width: 395,
    paddingTop: 50,
    backgroundColor: 'green',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
