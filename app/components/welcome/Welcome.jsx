import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import HomeScreen from '../home/HomeScreen';

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/welcome.jpg')}
        style={styles.image}
      />
      <TouchableOpacity
        style={styles.button}
          onPress={() => navigation.navigate('HomeScreen')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // Set the background color to white
  },
  image: {
    width: 300, // Set the desired width of your image
    height: 300, // Set the desired height of your image
    resizeMode: 'contain', // Adjust the resizeMode as needed
    marginBottom: 20, // Add margin if needed
  },
  button: {
    backgroundColor: '#440c8c', // Set the color to your desired purple shade
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff', // Set the text color to contrast with the background
    fontSize: 18,
  },
});

export default Welcome;

