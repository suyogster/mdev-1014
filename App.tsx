import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Layout1 from './components/Layout1';
import Layout2 from './components/Layout2';
import Layout3 from './components/Layout3';
import Layout4 from './components/Layout4';
import Layout5 from './components/Layout5';
import Layout6 from './components/Layout6';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Layout1' component={Layout1} />
        <Stack.Screen name='Layout2' component={Layout2} />
        <Stack.Screen name='Layout3' component={Layout3} />
        <Stack.Screen name='Layout4' component={Layout4} />
        <Stack.Screen name='Layout5' component={Layout5} />
        <Stack.Screen name='Layout6' component={Layout6} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
