// HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles'; // Adjust the path

// Dummy data for story categories with images
const storyCategories = [
  {
    id: 1,
    title: 'The Mysterious Mansion',
    description: 'Explore the secrets of an old mansion in this thrilling detective story.',
    image: require('../../assets/images/mansion.jpg'), // Add your image paths
  },
  {
    id: 2,
    title: 'Lost in the City',
    description: 'Solve puzzles and uncover the truth as you navigate through a mysterious city.',
    image: require('../../assets/images/city.jpg'),
  },
  // Add more categories as needed
];

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Explore Stories</Text>
      {storyCategories.map(category => (
        <TouchableOpacity
          key={category.id}
          style={styles.storyCard}
          onPress={() => navigation.navigate('Category', { category })}
        >
          <Image source={category.image} style={styles.storyImage} />
          <Text style={styles.storyTitle}>{category.title}</Text>
          <Text style={styles.storyDescription}>{category.description}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default HomeScreen;
