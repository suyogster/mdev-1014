import { Button, StyleSheet, Text, View } from 'react-native';

export default function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Button
        color={'red'}
        title='Layout 1'
        onPress={() => navigation.navigate('Layout1')}
      />
      <Button
        color={'purple'}
        title='Layout 2'
        onPress={() => navigation.navigate('Layout2')}
      />
      <Button
        color={'orange'}
        title='Layout 3'
        onPress={() => navigation.navigate('Layout3')}
      />
      <Button
        color={'green'}
        title='Layout 4'
        onPress={() => navigation.navigate('Layout4')}
      />
      <Button
        color={'blue'}
        title='Layout 5'
        onPress={() => navigation.navigate('Layout5')}
      />
      <Button
        color={'brown'}
        title='Layout 6'
        onPress={() => navigation.navigate('Layout6')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
