import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Home = ({ navigation }) => {
  // Hoşgeldiniz yazısını gizlemek için state kullanalım
  const [hidden, setHidden] = useState(false);

  // Burada otomatik olarak kapansın ve 2 saniye sonra Home ekranından çıkış yapalım
  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* Üst Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.exitButton} onPress={() => navigation.goBack()}>
          <Text style={styles.exitButtonText}>ÇIKIŞ</Text>
        </TouchableOpacity>
      </View>

      {/* Hoşgeldiniz yazısı */}
      {!hidden && <Text style={styles.welcomeText}>Hoşgeldiniz</Text>}
      
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Tansiyon Bilgileri */}
        <TouchableOpacity style={styles.infoContainer} onPress={() => navigation.navigate("Tansiyon")}>
          <Image
            source={{ uri: 'https://www.sekipaltunkan.com/images/gallery/dusuk-tansiyonun-nedenleri-nelerdir.webp' }}
            style={styles.infoImage}
          />
          <Text style={styles.infoText}>Günlük olarak tansiyon bilgilerini kaydedin</Text>
          <TouchableOpacity style={styles.infoButton}>
            <Text style={styles.infoButtonText}>Tansiyonunu Kaydet</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        {/* Şeker Bilgileri */}
        <TouchableOpacity style={styles.infoContainer} onPress={() => navigation.navigate("Seker")}>
          <Image
            source={{ uri: 'https://www.medicalpark.com.tr/_uploads/_images/_healthGuide/DTCKgwg5.jpg' }}
            style={styles.infoImage}
          />
          <Text style={styles.infoText}>Şeker bilgilerini kaydedin</Text>
          <TouchableOpacity style={styles.infoButton}>
            <Text style={styles.infoButtonText}>Şeker Bilgilerini Kaydet</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        {/* İlaç Hatırlatma */}
        <TouchableOpacity style={styles.infoContainer} onPress={() => navigation.navigate("Ilac")}>
          <Image
            source={{ uri: 'https://www.shutterstock.com/image-photo/pill-box-daily-take-medicine-260nw-1773905813.jpg' }}
            style={styles.infoImage}
          />
          <Text style={styles.infoText}>İlaç hatırlatma bilgileri</Text>
          <TouchableOpacity style={styles.infoButton}>
            <Text style={styles.infoButtonText}>İlaç Hatırlatmaları Göster</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        {/* Tavsiyeler */}
        <TouchableOpacity style={styles.infoContainer} onPress={() => navigation.navigate("Tavsiye")}>
          <Image
            source={{ uri: 'https://media.istockphoto.com/id/1319031310/tr/foto%C4%9Fraf/t%C4%B1bbi-re%C3%A7ete-yazan-doktor.jpg?s=612x612&w=0&k=20&c=JfJ0f9GAJxZTqMBGLLmCNKoheACWmBlBQ9qTtQPlhM0=' }}
            style={styles.infoImage}
          />
          <Text style={styles.infoText}>Sağlık tavsiyeleri</Text>
          <TouchableOpacity style={styles.infoButton}>
            <Text style={styles.infoButtonText}>Tavsiyeleri Gör</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </ScrollView>

      {/* Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate("Tansiyon")}>
          <Text style={[styles.navbarItem, styles.boldText]}>Tansiyon Bilgileri</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Seker")}>
          <Text style={[styles.navbarItem, styles.boldText]}>Şeker Bilgileri</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Ilac")}>
          <Text style={[styles.navbarItem, styles.boldText]}>İlaç Hatırlatma</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Tavsiye")}>
          <Text style={[styles.navbarItem, styles.boldText]}>Tavsiyeler</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  topBar: {
    width: '100%',
    backgroundColor: 'purple',
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'flex-start',
  },
  exitButton: {
    backgroundColor: 'purple',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  exitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingBottom: 80, // Navbar'ın üstünde içeriklerin düzgün görünmesi için
  },
  infoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  infoImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  infoText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoButton: {
    backgroundColor: 'purple',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  infoButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#eee',
    paddingVertical: 20,
    position: 'absolute',
    bottom: 0,
  },
  navbarItem: {
    fontSize: 15,
  },
  boldText: {
    fontWeight: 'bold',
    color: 'purple',
  },
});

export default Home;
