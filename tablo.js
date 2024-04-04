import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const WeeklyTable = () => {
  const [data, setData] = useState({
    Monday: '',
    Tuesday: '',
    Wednesday: '',
    Thursday: '',
    Friday: '',
  });

  const handleSave = () => {
    
    console.log('Kaydedilen veriler:', data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.day}>Monday</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setData({ ...data, Monday: text })}
          value={data.Monday}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.day}>Tuesday</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setData({ ...data, Tuesday: text })}
          value={data.Tuesday}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.day}>Wednesday</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setData({ ...data, Wednesday: text })}
          value={data.Wednesday}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.day}>Thursday</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setData({ ...data, Thursday: text })}
          value={data.Thursday}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.day}>Friday</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setData({ ...data, Friday: text })}
          value={data.Friday}
        />
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  day: {
    marginRight: 10,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    width: 100,
  },
  saveButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default WeeklyTable;
