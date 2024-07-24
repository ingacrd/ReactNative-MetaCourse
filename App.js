import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './WelcomeScreen';
import MenuItems from './components/MenuItems';
import MenuItemsFlatList from './components/MenuItemsFlatList';
import LoginScreen from './LoginScreen';
import MainScreen from './MainScreen';
import WelcomeColorScheme from './components/WelcomeColorScheme'

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return(
    <Image source={require('./img/logo.png')}
    style={
    {height:40,
    width:300,
    resizeMode:'contain',
    alignItems: 'center'}
    }/>
  )
}

export default function App() {
 
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <LittleLemonHeader />
        <Stack.Navigator 
          initialRouteName="Login" 
          screenOptions={{
            headerStyle:{backgroundColor:"#EE9972"},
            headerTintColor: '#333333',
            headerTitleStyle: {
              fontWeight: 'bold',
            },

            
            
          }}
          >
            
          <Stack.Screen 
          options={{title:'Home', 
            // headerTitle: (props) => <LogoTitle{...props}/>
          }}
          name="Welcome" 
          component={WelcomeScreen}/>

          <Stack.Screen 
            name="Login" 
            component={LoginScreen}
            
            />
        </Stack.Navigator>
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});
