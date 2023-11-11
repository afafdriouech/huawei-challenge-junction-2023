// Import necessary components and libraries
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Dummy data for story categories
const storyCategories = [
  { id: 1, title: 'Suspense', description: 'Detective stories with suspense' },
  { id: 2, title: 'Mystery', description: 'Engaging mystery stories' },
  // Add more categories as needed
];

// Home Screen Component
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Explore Stories</Text>
      {/* Render story categories */}
      {storyCategories.map(category => (
        <TouchableOpacity
          key={category.id}
          style={styles.categoryCard}
          onPress={() => navigation.navigate('Category', { category })}
        >
          <Text style={styles.categoryTitle}>{category.title}</Text>
          <Text style={styles.categoryDescription}>{category.description}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

// Tab Navigator
const Tab = createBottomTabNavigator();

// Main App Component
const App = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* Add more tabs/screens as needed */}
    </Tab.Navigator>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  categoryCard: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    width: '100%',
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoryDescription: {
    fontSize: 14,
    color: '#555',
  },
});

export default App;
