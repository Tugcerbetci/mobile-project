import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Seker = () => {
  const [data, setData] = useState({
    Monday: { ac: '', tok: '' },
    Tuesday: { ac: '', tok: '' },
    Wednesday: { ac: '', tok: '' },
    Thursday: { ac: '', tok: '' },
    Friday: { ac: '', tok: '' },
    Saturday: { ac: '', tok: '' },
    Sunday: { ac: '', tok: '' },
  });

  const [savedData, setSavedData] = useState([]);

  const handleSave = () => {
    const newData = Object.keys(data).map(day => ({ day, ...data[day] }));
    setSavedData(prevData => [...prevData, ...newData]); // Önceki verilere ekleniyor
    setData({ // Veri sıfırlanıyor
      Monday: { ac: '', tok: '' },
      Tuesday: { ac: '', tok: '' },
      Wednesday: { ac: '', tok: '' },
      Thursday: { ac: '', tok: '' },
      Friday: { ac: '', tok: '' },
      Saturday: { ac: '', tok: '' },
      Sunday: { ac: '', tok: '' },
    });
    console.log('Kaydedilen veriler:', newData);
  };

  const handleChange = (day, type, value) => {
    setData(prevData => ({
      ...prevData,
      [day]: {
        ...prevData[day],
        [type]: value,
      },
    }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Object.keys(data).map((day) => (
        <View key={day} style={styles.dayContainer}>
          <Text style={styles.day}>{day}</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Aç:</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleChange(day, 'ac', text)}
              value={data[day].ac}
              placeholder="Ölçüm"
              placeholderTextColor="#FF69B4"
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Tok:</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleChange(day, 'tok', text)}
              value={data[day].tok}
              placeholder="Ölçüm"
              placeholderTextColor="#FF69B4"
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
        {savedData.map(({ day, ac, tok }, index) => (
          <View key={index} style={styles.savedDataRow}>
            <Text style={styles.savedDay}>{day}</Text>
            <Text>Aç: {ac}</Text>
            <Text>Tok: {tok}</Text>
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
    color: '#FF69B4',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    marginRight: 10,
    width: 80,
    color: '#FF69B4',
  },
  input: {
    borderWidth: 1,
    borderColor: '#FF69B4',
    padding: 8,
    flex: 1,
    borderRadius: 5,
    color: '#FF69B4',
  },
  saveButton: {
    backgroundColor: '#FF69B4',
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
    color: '#FF69B4',
  },
  savedDataRow: {
    marginBottom: 10,
  },
  savedDay: {
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#FF69B4',
  },
});

export default Seker;
