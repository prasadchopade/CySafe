// import React, { useState } from "react";
// import { View, Text, TextInput, Button, StyleSheet, ScrollView } from "react-native";
// import { Picker } from "@react-native-picker/picker";
// import axios from "axios";

// const SubjectForm = () => {
//   const [name, setName] = useState("");
//   const [locationName, setLocationName] = useState("");
//   const [coordinates, setCoordinates] = useState({ latitude: "", longitude: "" });
//   const [schedule, setSchedule] = useState([{ day: "Monday", time: "" }]);

//   const handleScheduleChange = (index, field, value) => {
//     const updatedSchedule = [...schedule];
//     updatedSchedule[index][field] = value;
//     setSchedule(updatedSchedule);
//   };

//   const addSchedule = () => {
//     setSchedule([...schedule, { day: "Monday", time: "" }]);
//   };

//   const handleSubmit = async () => {
//     try {
//       console.log({
//         name,
//         locationName,
//         coordinates,
//         schedule,
//       });
//       const response = await axios.post(`http://192.168.73.233:5000/api/subjects/create`, {
//         name,
//         locationName,
//         coordinates,
//         schedule,
//       });
//       console.log("Subject created:", response.data);
//     } catch (error) {
//       console.error("Error creating subject:", error);
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.label}>Name:</Text>
//       <TextInput
//         style={styles.input}
//         value={name}
//         onChangeText={setName}
//         placeholder="Enter subject name"
//       />

//       <Text style={styles.label}>Location Name:</Text>
//       <TextInput
//         style={styles.input}
//         value={locationName}
//         onChangeText={setLocationName}
//         placeholder="Enter location name"
//       />

//       <Text style={styles.label}>Latitude:</Text>
//       <TextInput
//         style={styles.input}
//         value={coordinates.latitude}
//         onChangeText={(value) => setCoordinates({ ...coordinates, latitude: value })}
//         placeholder="Enter latitude"
//         keyboardType="numeric"
//       />

//       <Text style={styles.label}>Longitude:</Text>
//       <TextInput
//         style={styles.input}
//         value={coordinates.longitude}
//         onChangeText={(value) => setCoordinates({ ...coordinates, longitude: value })}
//         placeholder="Enter longitude"
//         keyboardType="numeric"
//       />

//       <Text style={styles.label}>Schedule:</Text>
//       {schedule.map((entry, index) => (
//         <View key={index} style={styles.scheduleContainer}>
//           <Picker
//             selectedValue={entry.day}
//             onValueChange={(value) => handleScheduleChange(index, "day", value)}
//             style={styles.picker}
//           >
//             <Picker.Item label="Monday" value="Monday" />
//             <Picker.Item label="Tuesday" value="Tuesday" />
//             <Picker.Item label="Wednesday" value="Wednesday" />
//             <Picker.Item label="Thursday" value="Thursday" />
//             <Picker.Item label="Friday" value="Friday" />
//             <Picker.Item label="Saturday" value="Saturday" />
//             <Picker.Item label="Sunday" value="Sunday" />
//           </Picker>

//           <TextInput
//             style={styles.input}
//             value={entry.time}
//             onChangeText={(value) => handleScheduleChange(index, "time", value)}
//             placeholder="Enter time (e.g., 09:00 AM)"
//           />
//         </View>
//       ))}

//       <Button title="Add Schedule" onPress={addSchedule} />
//       <View style={styles.submitButton}>
//         <Button title="Create Subject" onPress={handleSubmit} />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 8,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 10,
//     marginBottom: 16,
//     borderRadius: 5,
//   },
//   scheduleContainer: {
//     marginBottom: 16,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//   },
//   picker: {
//     marginBottom: 16,
//     height: 50,
//   },
//   submitButton: {
//     marginTop: 20,
//   },
// });

// export default SubjectForm;


import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Ride() {
  // State for user input
  const [currentLocation, setCurrentLocation] = useState('');
  const [destination, setDestination] = useState('');

  // Placeholder ML-based states
  const [potholePrediction, setPotholePrediction] = useState('High');
  const [predictiveCollision, setPredictiveCollision] = useState('5%');
  const [fatigueLevel, setFatigueLevel] = useState('Low');
  const [collisionProbability, setCollisionProbability] = useState('5%');

  // Ride summary placeholders
  const [distance, setDistance] = useState(2023);
  const [avgSpeed, setAvgSpeed] = useState(15);

  // Example map initial region (Miami):
  const initialRegion = {
    latitude: 25.7617,
    longitude: -80.1918,
    latitudeDelta: 0.0922,  // Zoom levels
    longitudeDelta: 0.0421,
  };

  const handleStartRide = () => {
    // TODO: Implement "start ride" logic, integration with ML, etc.
    alert('Ride Started!');
  };

  return (
    <View style={styles.container}>
      
      {/* Top Title */}
      <Text style={styles.title}>Ride</Text>

      {/* Current Location */}
      <Text style={styles.label}>Current Location:</Text>
      <TextInput
        style={styles.input}
        value={currentLocation}
        onChangeText={setCurrentLocation}
        placeholder="Enter your current location"
      />

      {/* Destination */}
      <Text style={styles.label}>Destination:</Text>
      <TextInput
        style={styles.input}
        value={destination}
        onChangeText={setDestination}
        placeholder="Enter your destination"
      />

      {/* MAP Section */}
      <MapView style={styles.map} initialRegion={initialRegion}>
        {/* Example Marker at "center" (Miami) */}
        <Marker coordinate={{ latitude: 25.7617, longitude: -80.1918 }} />
      </MapView>

      {/* Route Status */}
      <View style={styles.routeStatusContainer}>
        <Text style={styles.sectionTitle}>Route Status</Text>
        <Text>Pothole Prediction: {potholePrediction}</Text>
        <Text>Predictive Collision Risk: {predictiveCollision}</Text>
        <Text>Fatigue Level: {fatigueLevel}</Text>
        <Text>Collision Probability: {collisionProbability}</Text>
      </View>

      {/* Start Button */}
      <View style={styles.startContainer}>
        <Text>Fastest route now (3.6 mi), approx 18 min</Text>
        <Button title="Start" onPress={handleStartRide} />
      </View>

      {/* Ride Summary */}
      <View style={styles.rideSummaryContainer}>
        <Text style={styles.sectionTitle}>Ride Summary</Text>
        <View style={styles.row}>
          <Text>Distance: {distance}</Text>
          <Text>Avg Speed: {avgSpeed}</Text>
        </View>
      </View>
    </View>
  );
}

// Example styling
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20, 
    fontWeight: 'bold',
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    marginTop: 8,
    marginBottom: 4,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 6,
    fontSize: 14,
    marginBottom: 8,
    borderRadius: 4,
  },
  map: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  routeStatusContainer: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  startContainer: {
    marginBottom: 16,
  },
  rideSummaryContainer: {
    marginTop: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
});
