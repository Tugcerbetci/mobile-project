import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

// Örnek veri
const initialData = {
  tansiyon: '',
  seker: ''
};

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Sağlık Uygulamasına Hoşgeldiniz</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home', { data: initialData })}>
        <Text style={styles.buttonText}>BAŞLA</Text>
      </TouchableOpacity>
    </View>
  );
};

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={[styles.navbarText, styles.bold]}>Sağlık Uygulaması</Text>
    </View>
  );
};

const HomeScreen = ({ navigation, route }) => {
  const { data } = route.params;

  // Tansiyon bilgilerini kaydetmek için fonksiyon
  const saveTansiyon = () => {
    // Burada tansiyon bilgilerini kaydetmek için gerekli işlemler yapılabilir
    // Örneğin: bir API'ye POST isteği gönderme
    console.log("Tansiyon bilgileri kaydedildi");
  };

  // Şeker bilgilerini kaydetmek için fonksiyon
  const saveSeker = () => {
    // Burada şeker bilgilerini kaydetmek için gerekli işlemler yapılabilir
    // Örneğin: bir veritabanına yazma işlemi
    console.log("Şeker bilgileri kaydedildi");
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.content}>
        <Text style={styles.infoText}>Tansiyon: {data.tansiyon}</Text>
        <Text style={styles.infoText}>Şeker: {data.seker}</Text>
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionButton} onPress={saveTansiyon}>
            <Text style={styles.optionText}>Tansiyon Bilgilerini Kaydet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={saveSeker}>
            <Text style={styles.optionText}>Şeker Bilgilerini Kaydet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Tavsiye Al</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8BFD8', // Açık mor rengi
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
    color: 'purple',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  navbar: {
    height: 50,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  navbarText: {
    fontSize: 18,
    color: 'white',
  },
  bold: {
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  optionText: {
    fontSize: 18,
    color: 'white',
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
    color: 'purple',
    textAlign: 'center',
  },
});

export default App;
