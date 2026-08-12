import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, TextInput,   } from 'react-native';

export default function App() {
  return (
  
      <View style={styles.container}>
        <Text style={styles.heading}>Name</Text>
        <Text style={styles.heading}>Age</Text>
        <Text style={styles.heading}>Slots </Text>
        
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
  imageCotainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
    marginBottom: 20,
    borderWidth: 4,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  texInputs: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,  
  }

});
