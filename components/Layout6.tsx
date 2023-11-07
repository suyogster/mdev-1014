import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

interface itemType {
  id: number;
  name: string;
  title: string;
  image: string;
}

const data = [
  {
    id: 1,
    name: 'Suyog Shrestha',
    title: 'Beautiful Natural Snapshot',
    image:
      'https://images.unsplash.com/photo-1570661449115-75236441ba48?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Priyesh Gautam',
    title: 'A wonder scene',
    image:
      'https://plus.unsplash.com/premium_photo-1667842816788-d0e146c9dcf0?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Ripudaman Singh',
    title: 'Wish you were here :)',
    image:
      'https://images.unsplash.com/photo-1487360920430-e18a62e59ad2?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    name: 'Chandrika Ghale',
    title: 'Serenee!',
    image:
      'https://images.unsplash.com/photo-1542820893-f3d652b53f50?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    name: 'Roshan Khatri',
    title: 'I am lost',
    image:
      'https://images.unsplash.com/photo-1487297977649-04b1dc408d93?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function Layout6({ navigation }: any) {
  const [counter, setCounter] = useState<number>(1);
  const [highlight, setHighlight] = useState<itemType>(data[0]);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <Image
          onLoad={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
          source={{ uri: highlight.image }}
          style={{ width: 300, height: 300, marginVertical: 20 }}
        />
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
          {highlight.name}
        </Text>
        <Text style={{ fontSize: 18, fontWeight: '500' }}>
          {highlight.title}
        </Text>
      </View>

      <View style={styles.secondContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '100%',
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            style={styles.button}
            disabled={loading}
            onPress={() => {
              if (counter === data.length - 1) return;
              let index = counter + 1;
              setCounter(index);
              setHighlight(data[index]);
            }}
          >
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            disabled={loading}
            onPress={() => {
              if (counter === 0) return;
              let index = counter - 1;
              setCounter(index);
              setHighlight(data[index]);
            }}
          >
            <Text style={styles.btnText}>Previous</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <TouchableOpacity
            style={styles.button}
            disabled={loading}
            onPress={() => {
              let randomIndex;
              do {
                randomIndex = Math.floor(Math.random() * data.length);
              } while (randomIndex === counter);
              setCounter(randomIndex);
              setHighlight(data[randomIndex]);
            }}
          >
            <Text style={styles.btnText}>Random</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: 'lightyellow',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
    borderRadius: 30,
  },
  secondContainer: {
    flex: 0.5,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    marginTop: 20,
    borderRadius: 30,
  },
  button: {
    borderColor: 'black',
    backgroundColor: 'orange',
    borderWidth: 1,
    borderRadius: 20,
    padding: 5,
    width: '40%',
    height: '100%',
  },
  btnText: {
    fontSize: 30,
    textAlign: 'center',
  },
});
