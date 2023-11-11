import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { styles } from './styles.js'; // Adjust the path

const StoryDetails = ({ route }) => {
  const { category } = route.params;

  // Coordinates for Helsinki
  const initialRegion = {
    latitude: 60.1695,
    longitude: 24.9354,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  // Array of markers representing story pages
  const storyMarkers = [
    {
      id: 1,
      title: 'Page 1',
      description: 'Story Page 1',
      latitude: 60.1700,
      longitude: 24.9360,
    },
    {
      id: 2,
      title: 'Page 2',
      description: 'Story Page 2',
      latitude: 60.1680,
      longitude: 24.9340,
    },
    {
      id: 3,
      title: 'Page 3',
      description: 'Story Page 3',
      latitude: 60.1670,
      longitude: 24.9320,
    },
    {
      id: 4,
      title: 'Page 4',
      description: 'Story Page 4',
      latitude: 60.1655,
      longitude: 24.9305,
    },
    // Add more markers as needed
  ];

  // State to track the currently selected story page
  const [selectedPage, setSelectedPage] = useState(null);

  // State to store directions
  const [directions, setDirections] = useState([]);

  useEffect(() => {
    // Calculate directions between story markers
    calculateDirections();
  }, []);

  const calculateDirections = async () => {
    try {
      // Using Google Directions API or any other suitable API
      // Make API requests to calculate routes between story markers
      // Update the directions state with the response

      // For simplicity, we'll use a static set of directions in this example
      const staticDirections = [
        { latitude: 60.1700, longitude: 24.9360 },
        { latitude: 60.1680, longitude: 24.9340 },
        { latitude: 60.1670, longitude: 24.9320 },
        { latitude: 60.1655, longitude: 24.9305 },
      ];

      setDirections(staticDirections);
    } catch (error) {
      console.error('Error calculating directions:', error);
      Alert.alert('Error', 'Failed to calculate directions. Please try again.');
    }
  };

  const handleMarkerPress = (page) => {
    setSelectedPage(page);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category.title}</Text>
      <Text style={styles.description}>{category.description}</Text>

      {/* MapView */}
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
      >
        {/* Render story markers */}
        {storyMarkers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.title}
            description={marker.description}
            onPress={() => handleMarkerPress(marker)}
          />
        ))}

        {/* Render directions */}
        {directions.length > 0 && (
          <Polyline
            coordinates={directions}
            strokeWidth={4}
            strokeColor="blue"
          />
        )}
      </MapView>

      {/* Display selected story page */}
      {selectedPage && (
        <View style={styles.pageContainer}>
          <Text style={styles.pageTitle}>{selectedPage.title}</Text>
          <Text style={styles.pageContent}>{selectedPage.description}</Text>
        </View>
      )}
    </View>
  );
};

export default StoryDetails;
