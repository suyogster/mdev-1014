import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

interface itemType {
  id: string;
  image: string;
}

const renderItem = ({ item }: any) => (
  <View
    style={{
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingRight: 2,
    }}
  >
    <Image source={{ uri: item.image }} style={{ width: 150, height: 150 }} />
    <Text>{item.title}</Text>
  </View>
);

export default function Layout1({ navigation }: any) {
  const [data, setData] = useState<itemType[]>([
    {
      id: '1',
      image:
        'https://images.unsplash.com/photo-1570661449115-75236441ba48?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: '2',
      image:
        'https://plus.unsplash.com/premium_photo-1667842816788-d0e146c9dcf0?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: '3',
      image:
        'https://images.unsplash.com/photo-1487360920430-e18a62e59ad2?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
          Layout 1 - Suyog Shrestha
        </Text>
        <Text style={{ fontSize: 18, fontWeight: '500' }}>200565523</Text>
      </View>
      <View style={styles.secondContainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>
      <View style={styles.thirdContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert(`You've pressed the first button`)}
        >
          <Text>Button 1 pressed</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => alert(`You've pressed the first button`)}
        >
          <Text>Button 2 pressed</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => alert(`You've pressed the first button`)}
        >
          <Text>Button 3 pressed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  firstContainer: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
    borderRadius: 30,
  },
  secondContainer: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    width: '100%',
    borderRadius: 30,
    padding: 20,
  },
  thirdContainer: {
    flex: 1,
    backgroundColor: 'silver',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    borderRadius: 30,
    padding: 20,
  },
  button: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    padding: 5,
  },
});
