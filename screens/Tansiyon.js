import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Tansiyon = () => {
  const [data, setData] = useState({
    Monday: { morning: '', afternoon: '', evening: '' },
    Tuesday: { morning: '', afternoon: '', evening: '' },
    Wednesday: { morning: '', afternoon: '', evening: '' },
    Thursday: { morning: '', afternoon: '', evening: '' },
    Friday: { morning: '', afternoon: '', evening: '' },
    Saturday: { morning: '', afternoon: '', evening: '' },
    Sunday: { morning: '', afternoon: '', evening: '' },
  });

  const handleSave = () => {
    console.log('Kaydedilen veriler:', data);
  };

  const handleChange = (day, time, value) => {
    setData(prevData => ({
      ...prevData,
      [day]: {
        ...prevData[day],
        [time]: value,
      },
    }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Object.keys(data).map((day) => (
        <View key={day} style={styles.dayContainer}>
          <Text style={styles.day}>{day}</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Morning</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleChange(day, 'morning', text)}
              value={data[day].morning}
              placeholder="Ölçüm"
              placeholderTextColor="#FF6347"
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Afternoon</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleChange(day, 'afternoon', text)}
              value={data[day].afternoon}
              placeholder="Ölçüm"
              placeholderTextColor="#FF6347"
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Evening</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleChange(day, 'evening', text)}
              value={data[day].evening}
              placeholder="Ölçüm"
              placeholderTextColor="#FF6347"
            />
          </View>
        </View>
      ))}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Kaydet</Text>
      </TouchableOpacity>

      {/* Kaydedilen verilerin görüntülendiği bölüm */}
      <View style={styles.savedDataContainer}>
        <Text style={styles.savedDataTitle}>Kaydedilen Veriler</Text>
        {Object.keys(data).map((day) => (
          <View key={day} style={styles.savedDataRow}>
            <Text>{day}</Text>
            <Text>Morning: {data[day].morning}</Text>
            <Text>Afternoon: {data[day].afternoon}</Text>
            <Text>Evening: {data[day].evening}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
  dayContainer: {
    marginBottom: 20,
    width: '100%',
  },
  day: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FF6347',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    marginRight: 10,
    width: 80,
    color: '#FF6347',
  },
  input: {
    borderWidth: 1,
    borderColor: '#FF6347',
    padding: 8,
    flex: 1,
    borderRadius: 5,
    color: '#FF6347',
  },
  saveButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  savedDataContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FFE4E1',
    borderRadius: 5,
  },
  savedDataTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FF6347',
  },
  savedDataRow: {
    marginBottom: 10,
  },
});

export default Tansiyon;
