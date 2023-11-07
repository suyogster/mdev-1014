import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function Layout2() {
  const [clickedText, setClickedText] = useState('');

  const btn = (number: number) => {
    setClickedText(`Button ${number} is clicked`);
  
  };

  const imgBtn = () => {
    setClickedText('Image is clicked');
    
   
  };

  return (
    <ScrollView style={styles.wrapper}>
       <Text style={styles.clickedText}>{clickedText}</Text>

      <View>
        <TouchableOpacity onPress={() => btn(1)} style={{}}>
          <View style={styles.mainBox}>
            <Text style={styles.text}>Button 1</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => btn(2)} style={{}}>
          <View style={styles.mainBox}>
            <Text style={styles.text}>Button 2</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => btn(3)} style={{}}>
          <View style={styles.mainBox}>
            <Text style={styles.text}>Button 3</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => btn(4)} style={{}}>
          <View style={styles.mainBox}>
            <Text style={styles.text}>Button 4</Text>
          </View>
        </TouchableOpacity>
      </View>

     

      <TouchableOpacity
        onPress={imgBtn}
        style={{}}>
        <Image
          style={styles.img}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg',
          }}/>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 15,
  },
  mainBox: {
    width: '100%',
    padding: 40,
    marginTop: 24,
    borderRadius: 16,
    backgroundColor: 'grey',
  },
  text: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  clickedText: {
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  img: {
    height: 180,
    width: '100%',
    marginTop: 20,
    padding: 10,
    borderRadius: 8,
  },
});
