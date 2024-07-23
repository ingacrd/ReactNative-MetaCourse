import { Text, StyleSheet, ImageBackground, View } from 'react-native';

export default function MainScreen() {
  return (
        <View style={styles.container}>
            <ImageBackground 
            style = {styles.image}
            resizeMode='contain'
            source={require('./img/logo.png')}
            
            >
                <Text style={styles.title}>Little Lemon, your local Mediterranean Bistro</Text>
            </ImageBackground>
            
        </View>
        
     


  );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
    },
  container: {
    flex: 1,
    padding:24,
    marginTop:25,
    backgroundColor: '#fff',
  },
 
  
  
  title: {
    marginTop:16,
    paddingVertical:10,
    fontSize: 30,
    color: '#333333',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'

  },
  
});