/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TextInput,Button, alert, TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = ({navigation}) => {
  const pasword = '123';
  const emaill = 'admin';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function login (){
    if (email === emaill && password === pasword){
      navigation.navigate('Home');
    }
    else {
      navigation.navigate('Home');
    };
  }


  return (
    <SafeAreaView style={styles.continer}>
    <View style={styles.view_style}>
      <Text style={styles.text_title1}>  </Text>
      <Text style={styles.text_title3}>  </Text>
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
    <Button title="Giriş Yap" onPress={() => {login()}} style={styles}/>
    </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
    continer:{
        flex:1,
        backgroundColor:'white',
    },
    view_style:{
      flex:1,
      backgroundColor:'#E8C6F4',
      justifyContent:'space-between',
      marginBottom:50,
    },
    view_style2:{
      flex:3,
      backgroundColor:'white',
      justifyContent:'center',
      marginLeft:20,
      marginRight:20,
      marginBottom:30,
      marginTop:30,
      borderWidth:1,
      borderColor:'gray',
      borderRadius:10,
      padding:40,

    },
    view_style3:{
      flex:2,
      textAlign:'center',
      margin:20,
    },
    text_title1:{
      fontSize: 40,
      textAlign:'left',
      color:'#771DA1',
      fontWeight:'bold',
      marginLeft:10,
    },
    text_title2:{
     width: '100%',
     height: 40,
     borderColor: 'pink',
     color:'pink',
     borderWidth: 2,
     marginBottom: 20,
     paddingHorizontal: 10,
     borderRadius: 5,
    },
    text_title3:{
      fontSize:20,
      textAlign:'center',
      color:'#771DA1',
      fontWeight:'bold',
      fontStyle:'italic',
      marginBottom:10,
    },
    buton:{
      textAlign:'center',
      fontStyle:'italic',
      color: 'purple',
    },
});