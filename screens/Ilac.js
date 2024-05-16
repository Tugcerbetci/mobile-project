import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AlarmScreen() {
  const [alarmName, setAlarmName] = React.useState('');
  const [date, setDate] = React.useState(new Date());
  const [mode, setMode] = React.useState('date');
  const [show, setShow] = React.useState(false);
  const [alarms, setAlarms] = React.useState([]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const addAlarm = () => {
    setAlarms([...alarms, { name: alarmName, date }]);
    setAlarmName('');
    setDate(new Date());
  };

  const confirmDelete = (index) => {
    Alert.alert(
      "Alarm Silinsin mi?",
      "Bu alarmı silmek istediğinizden emin misiniz?",
      [
        {
          text: "Hayır",
          onPress: () => console.log("Silme işlemi iptal edildi"),
          style: "cancel"
        },
        {
          text: "Evet",
          onPress: () => deleteAlarm(index),
          style: "destructive",
        }
      ],
      { cancelable: true }
    );
  };

  const deleteAlarm = (index) => {
    const newAlarms = alarms.filter((_, i) => i !== index);
    setAlarms(newAlarms);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.alarmNameInput}
        placeholder="Alarm Adı"
        value={alarmName}
        onChangeText={setAlarmName}
        placeholderTextColor="#D8BFD8"
      />
      <View style={styles.buttonRow}>
        <Button onPress={() => showMode('date')} title="Tarih Seç" color="#9370DB" />
        <Button onPress={() => showMode('time')} title="Saat Seç" color="#9370DB" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <TouchableOpacity style={styles.setAlarmButton} onPress={addAlarm}>
        <Text style={styles.setAlarmButtonText}>Alarmı Ayarla</Text>
      </TouchableOpacity>
      <FlatList
        data={alarms}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => confirmDelete(index)}>
            <View style={styles.alarmItem}>
              <Text style={styles.alarmText}>{item.name}</Text>
              <Text style={styles.alarmText}>{item.date.toLocaleString()}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F8FF',
  },
  alarmNameInput: {
    height: 50,
    borderColor: '#9370DB',
    borderWidth: 1,
    paddingLeft: 10,
    fontSize: 18,
    marginBottom: 20,
    borderRadius: 5,
    color: '#4B0082',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  setAlarmButton: {
    backgroundColor: '#8A2BE2',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  setAlarmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  alarmItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#9370DB',
  },
  alarmText: {
    fontSize: 16,
    color: '#4B0082',
  },
});
