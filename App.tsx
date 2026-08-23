import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, TextInput } from 'react-native';
import image from './assets/image.png';

export default function App() {

  const [studentNumber, setStudentNumber] = useState('');

   const[name, setName] = useState('');
   const [years, setYears] = useState('');
   const[slots, setSlots] = useState('');
   const[amount, setAmount] = useState('');

  const handleStudentNumberChange = (text: string) => {
    setStudentNumber(text);
  }

  const handleNameChange = (text: string) => {
    setName(text);
  }
  const handleYearsChange = (text: string) => {
    setYears(text);
  }

  return (


    <View style = {styles.headerLine}>
        
        <Text style = {{alignSelf: 'flex-start'}}> Ironline Fitness </Text>

        <Text style = {styles.studentNumberLine}>
          ST
          <TextInput placeholder  = "00000000" value={studentNumber} onChangeText={handleStudentNumberChange}  />
        </Text>
     

     <View style={styles.container}>
        <View style= {styles.ImageCaption}>
          <View style={styles.imageContainer}>
           <Image source={image} style={styles.image} />
         </View>        
        
         <Text style = {styles.nameText} > Sipho Ndlovu </Text>

      </View>

        <View  style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 20, }}>

        <Text style= {styles.lableStyle}>
          <TextInput style = {styles.agentInformation} value={years} onChangeText={handleYearsChange} keyboardType = 'numeric' placeholder = "99" />
          years experience 
        </Text>

        <Text style= {styles.lableStyle}>
         <TextInput style = {styles.agentInformation} value={amount} onChangeText={(text) => setAmount(text) } keyboardType = 'numeric' placeholder = "R999"/>
          
        </Text>

        <Text style= {styles.lableStyle}>
         <TextInput style = {styles.agentInformation} value={slots} onChangeText={(text) => setSlots(text) } keyboardType = 'numeric' placeholder = "0" />
        </Text>

        </View>
        <View> 

        <TextInput placeholder = "please enter your name" value = {slots} onChangeText = {handleNameChange}/>

      </View>

      <TouchableOpacity>
        <View style = {styles.ButtonDesign} >
          <Text style = {{padding: 10, fontWeight: "500", fontSize: 22, color: "#fff", textTransform: "uppercase"}}>Book a session </Text>
        </View>
      </TouchableOpacity>

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
    height: '60%',
    width: '90%',
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
    borderWidth: 0,
    borderColor: 'black',
    alignSelf: "flex-end"
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
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Arial",
    borderWidth:0,
    padding:5, 
    marginRight: 5,
    marginLeft: 4,
    fontStyle: 'italic',
    color: '#000000',
    width : '50%',
    height: '25%'
  },
  ImageCaption: {
    flexDirection: 'row',

  },
  nameText:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#110485',
    width: "auto"
    
  },

  studentNumberLine: {
    backgroundColor: '#F5F5F5',
    alignSelf: 'flex-end',
    margin : 5
  },
  headerLine: {
    padding: 2,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    width: "auto"
  },
  bookingButton: {
    backgroundColor : "#FF6B00"
  },
  ButtonDesign: {
    backgroundColor: "rgba(58, 58, 57, 0.9)",
    borderRadius: "20%",
    height: "auto",
    padding: 7,
    margin: 6,
    
  },
  lableStyle: {
    flexDirection: "column",
    fontSize: 12,
    fontStyle: 'italic',
    backgroundColor: "rgba(156, 156, 156, 0.79)"
  }

});
