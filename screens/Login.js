/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function login() {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('Home');
    } catch (error) {
      if (error.code === 'auth/invalid-email') {
        Alert.alert('Hatalı e-posta adresi', 'Geçerli bir e-posta adresi girin.');
      } else if (error.code === 'auth/user-not-found') {
        Alert.alert('Kullanıcı bulunamadı', 'Kullanıcı kayıtlı değil.');
      } else if (error.code === 'auth/wrong-password') {
        Alert.alert('Hatalı şifre', 'Geçerli bir şifre girin.');
      } else {
        Alert.alert('Giriş yapılamadı', error.message);
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view_style}>
        <Text style={styles.text_title1}>Giriş Yap</Text>
        <Text style={styles.text_title3}>Lütfen bilgilerinizi girin</Text>
      </View>
      <View style={styles.view_style2}>
        <TextInput
          style={styles.text_title2}
          placeholder="Email adresinizi girin"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.text_title2}
          placeholder="Şifrenizi girin"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <View style={styles.view_style3}>
        <Button title="Giriş Yap" onPress={login} />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  view_style: {
    flex: 1,
    backgroundColor: '#E8C6F4',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  view_style2: {
    flex: 3,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30,
    marginTop: 30,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 40,
  },
  view_style3: {
    flex: 2,
    textAlign: 'center',
    margin: 20,
  },
  text_title1: {
    fontSize: 40,
    textAlign: 'left',
    color: '#771DA1',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  text_title2: {
    width: '100%',
    height: 40,
    borderColor: 'pink',
    color: 'pink',
    borderWidth: 2,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  text_title3: {
    fontSize: 20,
    textAlign: 'center',
    color: '#771DA1',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  buton: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: 'purple',
  },
});
