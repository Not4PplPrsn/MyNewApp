import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, TextInput } from 'react-native';
import image from './assets/image.png';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <TextInput style={styles.texInputs} placeholder="Enter your name" />
      <StatusBar style="auto" />
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
  heading:{fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    color: 'blue',
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
    marginBottom: 20,
    borderWidth: 4,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  texInputs: {
    height: 40,
    borderColor: 'rgba(100, 100, 70, 0.84)',
    borderWidth: 3,
    marginBottom: 10,
    paddingHorizontal: 10,  
    
  }

});
