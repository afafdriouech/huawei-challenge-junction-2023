import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, Modal, TouchableOpacity } from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';
import { Accelerometer } from 'expo-sensors';
import { styles, customMapStyle } from './styles.js';
import { GOOGLE_API_KEY } from '../../../environments';

const StoryDetails = ({ route }) => {
  const { category } = route.params;
  const initialRegion = {
    latitude: 60.16162289094502,
    longitude: 24.903183042329317,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  };

  const [storyMarkers, setStoryMarkers] = useState([
    { id: 1, title: 'Page 1', description: 'Story Page 1', latitude: 60.1618, longitude: 24.9032 },
    { id: 2, title: 'Page 2', description: 'Story Page 2', latitude: 60.1617, longitude: 24.9031 },
    { id: 3, title: 'Page 3', description: 'Story Page 3', latitude: 60.1616, longitude: 24.9030 },
    { id: 4, title: 'Page 4', description: 'Story Page 4', latitude: 60.1615, longitude: 24.9029 },
  ]);

  const [selectedPage, setSelectedPage] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [userPath, setUserPath] = useState([]);
  const [showDirections, setShowDirections] = useState(false);
  const [stepCount, setStepCount] = useState(0);
  const [showImageModal, setShowImageModal] = useState(false);
  const [isMarkerClickable, setIsMarkerClickable] = useState(false);

  useEffect(() => {
    // Start tracking user's location
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      const locationSubscriber = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 5000,
          distanceInterval: 10,
        },
        location => {
          const { latitude, longitude } = location.coords;
          setUserLocation({ latitude, longitude });
          setUserPath(prevPath => [...prevPath, { latitude, longitude }]);
        }
      );

      return () => {
        if (locationSubscriber) {
          locationSubscriber.remove();
        }
      };
    })();
  }, []);

  useEffect(() => {
    // Start tracking steps using Accelerometer
    Accelerometer.addListener(accelerometerData => {
      const { x, y, z } = accelerometerData;
      const acceleration = Math.sqrt(x ** 2 + y ** 2 + z ** 2);
      if (acceleration > 1.2) {
        setStepCount(prevCount => prevCount + 1);
      }
    });

    return () => {
      // Stop listening to the accelerometer when the component unmounts
      Accelerometer.removeAllListeners();
    };
  }, []);

  useEffect(() => {
    // Check if the user is close to a story marker
    if (userLocation && storyMarkers.some(marker => getDistance(userLocation, marker) < 0.02)) {
      setIsMarkerClickable(true);
    } else {
      setIsMarkerClickable(false);
    }
  }, [userLocation, storyMarkers]);

  const getDistance = (location1, location2) => {
    const lat1 = location1.latitude;
    const lon1 = location1.longitude;
    const lat2 = location2.latitude;
    const lon2 = location2.longitude;

    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km

    return distance;
  };

  const deg2rad = deg => {
    return deg * (Math.PI / 180);
  };

  const handleMarkerPress = marker => {
    // If the marker is clickable, show the story
    if (isMarkerClickable) {
      setSelectedPage(marker);
    }
  };

  const toggleDirections = () => {
    setShowDirections(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        region={userLocation}
        customMapStyle={customMapStyle}
        provider={PROVIDER_GOOGLE}
      >
        {/* Render story markers */}
        {storyMarkers.map(marker => (
          <Marker
            key={marker.id}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            title={marker.title}
            description={marker.description}
            onPress={() => handleMarkerPress(marker)}
          />
        ))}

        {/* Render user's current location */}
        {userLocation && (
          <Marker
            coordinate={{ latitude: userLocation.latitude, longitude: userLocation.longitude }}
            title="You are here"
            description="Your current location"
            pinColor="green"
          />
        )}

        {/* Render user's path as a Polyline when showDirections is true */}
        {showDirections && userPath.length > 1 && (
          <Polyline
            coordinates={userPath}
            strokeWidth={4}
            strokeColor="blue"
          />
        )}

        {/* Render MapViewDirections for directions to the selected marker */}
                {storyMarkers.map(marker => (
                <MapViewDirections
                            key={marker.id}
                            origin={userLocation}
                            destination={{ latitude: marker.latitude, longitude: marker.longitude }}
                            strokeWidth={4}
                            strokeColor="red"
                            apikey={GOOGLE_API_KEY}
                          />
                ))}
      </MapView>

      {/* Display selected story page */}
      {selectedPage && (
        <View style={styles.pageContainer}>
          <Text style={styles.pageTitle}>{selectedPage.title}</Text>
          <Text style={styles.pageContent}>{selectedPage.description}</Text>
        </View>
      )}

      {/* Display number of steps */}
      <View style={styles.stepCountContainer}>
        <Text style={styles.stepCountText}>Steps: {stepCount}</Text>
      </View>

      {/* Button to toggle directions */}
      <Button title={showDirections ? "Hide Directions" : "Show Directions"} onPress={toggleDirections} />

      {/* Modal to show the image when close to Page 2 */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showImageModal}
        onRequestClose={() => setShowImageModal(false)}
      >
        <View style={styles.modalContainer}>
          <Image
            source={require('../../assets/images/city.jpg')}
            style={styles.modalImage}
            resizeMode="cover"
          />
          <Button title="Close Image" onPress={() => setShowImageModal(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default StoryDetails;

