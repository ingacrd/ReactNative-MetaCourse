import { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native';



export default function WelcomeScreenKeyboard() {

  const [name, onChangeName] = useState('');


  return (
<KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios'? 'padding' : 'height'}
          >
        <ScrollView indicatorStyle={"white"} keyboardDismissMode="on-drag">
            <Text style={styles.subtitle}>
            Welcome to Little Lemon 
            
        </Text>
        
        <Text style={styles.paragraph}>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
        </Text>
        
          <TextInput
          style = {styles.inputText}
          value = {name}
          onChangeText = {onChangeName}
          placeholder={'First Name'}
        />
        
        
        </ScrollView>
        </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    subtitle: {
            padding:40,
          fontSize: 30,
          color: '#EDEFEE',
          textAlign: 'center',
        },
    paragraph: {
          fontSize: 20,
          padding:20,
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
    }

})