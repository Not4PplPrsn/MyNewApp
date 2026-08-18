import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, TextInput } from 'react-native';
import image from './assets/image.png';

export default function App() {
  return (
    <View style={styles.container}>
      <View style= {styles.ImageCaption}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>        
        
        <Text style = {styles.nameText} > Sipho Ndlovu </Text>

      </View>
      <View  style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 20, }}>

        <Text style = {styles.agentInformation}>Years Experience: 99</Text>
        <Text style = {styles.agentInformation}>Consultation fee: R999</Text>
        <Text style = {styles.agentInformation}>Slots filled: 0</Text>
      </View>

      <View style = {{alignItems: 'center', margin: 15, backgroundColor: '#7d9497', width: '52%', height: '35%', padding: 10, borderRadius: 5,}}>
      <TextInput style={styles.texInputs} placeholder="Something Something"
      placeholderTextColor="#665e5e6c" />
      
      </View>


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
    height: 'auto',
    width: 'auto',
  },
  heading:{fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    color: 'blue',
  },
  imageContainer: {
    width: 190,
    height: 190,
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
    backgroundColor: '#e3e4d36b',
    
  },
  agentInformation:{
    fontSize: 12,
    fontWeight: "100",
    fontFamily: "Arial",
    borderWidth:0,
    backgroundColor: "rgba(10, 36, 107, 0.49)",
    width: '50%',
    height: 'auto',
    padding: 7, 
    marginRight: 5,
    marginLeft: 9,
    fontStyle: 'italic',
    color: '#afe297',
  },
  ImageCaption: {
    margin: 5,
    flexDirection: 'row',

  },
  nameText:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#110485'
  }

});
