import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Ionicons from '@expo/vector-icons/Ionicons';



import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './WelcomeScreen';
import MenuItems from './components/MenuItems';
import MenuItemsFlatList from './components/MenuItemsFlatList';
import LoginScreen from './LoginScreen';
import MainScreen from './MainScreen';
import WelcomeColorScheme from './components/WelcomeColorScheme'
// import Subscribe from './Subscribe';
import MenuItemsFetch from './components/MenuItemsFetch';
import Preferences from './components/Preferences';

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator ();

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

export default function App1() {

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
          <Stack.Screen
            name="MenuItems"
            component={MenuItemsFetch}
          />
          <Stack.Screen
          name="Preferences"
          component={Preferences}
        />
          {/* <Stack.Screen
            name="Subscribe"
            component={Subscribe}
          /> */}
        </Stack.Navigator>
        
          
      

        {/* <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Welcome') {
                iconName = focused
                  ? 'home-outline'
                  : 'home-outline';
              } else if (route.name === 'Login') {
                iconName =  'enter-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        initialRouteName="Login"
        >
          <Tab.Screen name="Login" component={LoginScreen} />
          <Tab.Screen name="Welcome" component={WelcomeScreen} />
        </Tab.Navigator> */}
        
        {/* <Drawer.Navigator
          initialRouteName="Login"
        >
          <Drawer.Screen name="Welcome" component={WelcomeScreen} />
          <Drawer.Screen name="Login" component={LoginScreen} />
      </Drawer.Navigator> */}
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





