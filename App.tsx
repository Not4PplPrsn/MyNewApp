import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, TextInput } from 'react-native';
import image from './assets/image.png';
import AntDesign from '@expo/vector-icons/AntDesign'
import { Ionicons } from '@expo/vector-icons';


const trainerName = "Sipho Ndlovu"

const speciality = "Strength and Conditioning";
const yearsExperience = 7;
const sessionPrice = 250;

  const studentNumber = "ST10012345";

export default function App() {

  const [studentNumber, setStudentNumber] = useState('');

   const[name, setName] = useState('');
   const [years, setYears] = useState('');
   const[slots, setSlots] = useState(3);
   const[amount, setAmount] = useState('');
   const [booked, setBooked] = useState(false);

  const handleStudentNumberChange = (text: string) => {
    setStudentNumber(text);
  }

  const handleNameChange = (text: string) => {
    setName(text);
  }
  const handleYearsChange = (text: string) => {
    setYears(text);
  }
  const handleMessage = () => {

  }
 let slotsLeft = 4;
  slotsLeft = 3;

  return (
    <View style={styles.container}>
        <View style={styles.tile}>
          <Ionicons name="trophy-outline" size={18} color="#211C17" />
          <Text style={styles.tileNumber}>{yearsExperience}</Text>
          <Text style={styles.tileLabel}>YEARS</Text>
        </View>
        <View style={styles.tile}>
          <Ionicons name="pricetag-outline" size={18} color="#211C17" />
          <Text style={styles.tileNumber}>R{sessionPrice}</Text>
          <Text style={styles.tileLabel}>PER SESSION</Text>
        </View>
        <View style={styles.tile}>
          <Ionicons name="calendar-outline" size={18} color="#211C17" />
          <Text style={styles.tileNumber}>{slots}</Text>
          <Text style={styles.tileLabel}>SLOTS LEFT</Text>
        </View>      



                <View style={styles.bookingBox}>
          <Text style={styles.bookingLabel}>YOUR NAME</Text>
          <View style={styles.inputRow}>
             <Ionicons name="person-outline" size={18} color="#A39A8E" />
            <TextInput
              style={styles.input}
              placeholder="Type your name"
              placeholderTextColor="#A39A8E"
              onChangeText ={handleNameChange}
            />
          </View>
        </View>

        <Button
            title="Test button"
                       onPress={() => {
              console.log("Booking for: " + name);
              setSlots(slots - 1);
              setBooked(true);
            }}
          />

        <Text style={styles.bookingFor}>Booking for: {name}</Text>
        <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#101010',
  paddingTop: 90,
  paddingHorizontal: 20,
},

name: {
  fontSize: 30,
  fontWeight: 'bold',
  color: '#101010',
},
speciality: {
  fontSize: 16,
  color: '#5A5A55',
  paddingBottom: 14,
},

detail: {
  fontSize: 18,
  color: '#101010',
  paddingTop: 6,
},

price: {
  fontSize: 26,
  fontWeight: 'bold',
  color: '#101010',
  paddingTop: 16,
},

brand: {
  fontSize: 13,
  letterSpacing: 2,
  color: '#8A8A85',
},

  stamp: {
    fontSize: 11,
    letterSpacing: 1,
    color: '#8A8A85',
    paddingBottom: 14,
  },

    photo: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 3,
    borderColor: '#D9480F',
  },

 cta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#211C17',
    paddingVertical: 18,
    borderRadius: 999,
    marginTop: 22,
  },
  ctaText: {
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    color: '#FFFFFF',
  },
  bookingBox: {
    backgroundColor: '#F5F1EA',
    padding: 16,
    borderRadius: 24,
    marginTop: 22,
    borderWidth: 1,
    borderColor: '#E2DAD0',
  },
  bookingLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1.2,
    color: '#A39A8E',
    marginBottom: 10,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: '#E2DAD0',
  },
  input: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 15,
    color: '#FFFFFF',
  },

  bookingFor: {
    fontSize: 13,
    color: '#6F665C',
    marginTop: 12,
  },

  tile: {
    backgroundColor: '#101010',
    padding: 14,
    borderRadius: 14,
    marginTop: 10,
  },
  tileNumber: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#E6FF3D',
  },
  tileLabel: {
    fontSize: 10,
    letterSpacing: 1,
    color: '#8A8A85',
    marginTop: 2,
  },

  card: {
    shadowColor: '#3B2F22',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.10,
    shadowRadius: 24,
    elevation: 8,
  },

    chip: {
    alignSelf: 'flex-start',
    marginTop: 8,
    backgroundColor: '#211C17',
    color: '#211C17',
    fontSize: 11,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    overflow: 'hidden',
  },

  ctaPressed: {
    backgroundColor: '#4A4034',
  },


});
