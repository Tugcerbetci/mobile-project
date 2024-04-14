import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Notifications } from 'react-native-notifications';

const AlarmApp = () => {
  const [alarmSet, setAlarmSet] = useState(false);

  useEffect(() => {
  
    checkScheduledAlarm();
  }, []);

  const checkScheduledAlarm = async () => {
    
    const isAlarmSet = await AsyncStorage.getItem('isAlarmSet');
    if (isAlarmSet === 'true') {
      setAlarmSet(true);
    }
  };

  const scheduleAlarm = () => {
    // Alarmı ayarla
    Notifications.postLocalNotification({
      title: 'İlaç zamanı!',
      body: 'Unutmayın ilacınızı almayı!',
      silent: false,
      fireDate: new Date().toISOString(), // Şu anki zaman
      repeatInterval: 'day', // Günlük tekrar
    });

    // Alarmın ayarlandığını kaydet
    AsyncStorage.setItem('isAlarmSet', 'true');
    setAlarmSet(true);
  };

  const cancelAlarm = () => {
    // Alarmı iptal et
    Notifications.cancelAllLocalNotifications();

    // Alarmın iptal edildiğini kaydet
    AsyncStorage.setItem('isAlarmSet', 'false');
    setAlarmSet(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>İlaç Hatırlatma Uygulaması</Text>
      {alarmSet ? (
        <Button title="Alarmı İptal Et" onPress={cancelAlarm} />
      ) : (
        <Button title="Alarmı Ayarla" onPress={scheduleAlarm} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default AlarmApp;
