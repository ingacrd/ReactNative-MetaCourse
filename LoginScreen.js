import { ScrollView, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import { useState } from 'react';

export default function LoginScreen({navigation}) {

  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  // const [userLogged, setUserLogged] = useState(false);
  
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      {/* {userLogged?
      <>
      <Text style={styles.headerText}>You are Logged in!</Text>
      </> :
      <> */}
      <Text style={styles.regularText}>Login to continue </Text>
      <TextInput
        style = {styles.inputText}
        value = {email}
        onChangeText = {onChangeEmail}
        placeholder={'email'}
        keyboardType = 'email-address'
        />
      <TextInput 
        style = {styles.inputText}
        value = {password}
        onChangeText = {onChangePassword}
        placeholder={'password'}
        keyboardType={'default'}
        secureTextEntry={true}
      />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Welcome")}>
        <Text style={styles.buttonText}>
           Log In
        </Text>
      </Pressable>
      {/* </>} */}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputText: {
    height: 40, 
    margin: 12, 
    borderWidth: 1, 
    padding: 10, 
    fontSize: 16, 
    borderColor: '#EDEFEE', 
    backgroundColor: '#EDEFEE', 
    },
   
   button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#EE9972',
    borderColor: '#EE9972',
    borderWidth: 2,
    borderRadius: 50
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  },
  });
