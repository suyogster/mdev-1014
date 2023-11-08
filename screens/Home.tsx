import { Button, StyleSheet, View, Text } from 'react-native';

export default function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 40 }}>
        MDEV-1014 - Assignment 1
      </Text>
      <Button
        color={'red'}
        title='Suyog Shrestha - 200565523 - Layout 1'
        onPress={() => navigation.navigate('Layout1')}
      />
      <Button
        color={'purple'}
        title='Roshan Khatri - 200575702 - Layout 2'
        onPress={() => navigation.navigate('Layout2')}
      />
      <Button
        color={'orange'}
        title='Priyesh Gautam - 200568939 - Layout 3'
        onPress={() => navigation.navigate('Layout3')}
      />
      <Button
        color={'green'}
        title='Chandrika Ghale - 200575692 - Layout 4'
        onPress={() => navigation.navigate('Layout4')}
      />
      <Button
        color={'blue'}
        title='Ripudaman Singh - 200562402 - Layout 5'
        onPress={() => navigation.navigate('Layout5')}
      />
      <Button
        color={'brown'}
        title='Suyog Shrestha - 200565523 - Layout 6'
        onPress={() => navigation.navigate('Layout6')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
