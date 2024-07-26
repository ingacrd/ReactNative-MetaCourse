import React, { useState } from 'react'
import { View, StyleSheet, Image , Text, TextInput, Pressable, Alert} from 'react-native';
import { ValidateEmail } from '../utils';

const Subscribe = () => {
    const [email, onChangeEmail] = useState("");
  return (
    
    <>
        <View style={styles.headerWrapper}>
         <Image 
         style={styles.image}
         source={require('./img/logo.png')}
         resizeMode='contain'
         accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
         />
        
        </View>
        <View>
            <Text>Subscribe to our newsletter for our lastes delicious recipes!</Text>
            <TextInput
                style = {styles.inputText}
                value = {email}
                onChangeText = {onChangeEmail}
                placeholder={'email'}
                keyboardType = 'email-address'
            />
            <Pressable
        style={styles.button}
        onPress={() => Alert("Thanks for subscribing")}>
        <Text style={styles.buttonText}>
           Subscribe
        </Text>
      </Pressable>
        </View>
    </>
    
    
        
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin:10,
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
  
  
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,

    textAlign: 'center',

  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,

    textAlign: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 30,
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

export default Subscribe