import * as React from 'react';
import { Text, View, StyleSheet, Alert} from 'react-native';
import Constants from 'expo-constants';
import { Switch } from 'react-native-paper';
// import { AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import useUpdate from '../useUpdate';


export default function Preferences() {

  const [preferences, setPreferences] = React.useState({
    pushNotifications: false,
    emailMarketing: false,
    latestNews: false,
  });

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const storedPreferences = await AsyncStorage.getItem('preferences');
  //       setPreferences(storedPreferences === null ? [] : JSON.parse(storedPreferences));
  //     } catch (e) {
  //       Alert.alert(`An error occurred: ${e.message}`);
  //       console.log(e.message);
  //     }
  //   })();
  // }, []);

  useEffect(() => {
    // Populate preferences from storage using AsyncStorage.multiGet
    (async() =>{
      try{
        const values = await AsyncStorage.multiGet(Object.keys(preferences));
        const initialState = values.reduce((acc, curr)=>{
          acc[curr[0]] = JSON.parse(curr[1]);
          return acc;
        },{});
     
        setPreferences(initialState);
      } catch(e){
        Alert.alert(`An error occurred: ${e.message}`)
      }
    })();
  }, [])
  

     // This effect only runs when the preferences state updates, excluding initial mount 
 useUpdate(() => { 
   (async () => { 
     // Every time there is an update on the preference state, we persist it on storage
     //using multiSet API
     const keyValues = Object.entries(preferences).map((entry)=>{
      return [entry[0], String(entry[1])];
     });

        try{
            await AsyncStorage.multiSet(keyValues);
        } catch(e){
            Alert.alert(`An error occurred: ${e.message}`);
            console.log(e.message);
        }
   })(); 
 }, [preferences]); 



  const updateState = (key) => () =>
    setPreferences((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));



  return (
    <View style={styles.container}>
      <Text style={styles.header}>Account Preferences</Text>
      <View style={styles.row}>
        <Text>Push notifications</Text>
        <Switch
          value={preferences.pushNotifications}
          onValueChange={updateState('pushNotifications')}
        />
      </View>
      <View style={styles.row}>
        <Text>Marketing emails</Text>
        <Switch
          value={preferences.emailMarketing}
          onValueChange={updateState('emailMarketing')}
        />
      </View>
      <View style={styles.row}>
        <Text>Latest news</Text>
        <Switch
          value={preferences.latestNews}
          onValueChange={updateState('latestNews')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  header: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
