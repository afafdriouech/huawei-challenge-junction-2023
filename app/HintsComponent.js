// HintsComponent.js

import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';

const HintsComponent = ({ userLocation }) => {
  const hintLocations = [
    { id: 1, latitude: 37.7749, longitude: -122.4194, hint: "Look for a blue building." },
    { id: 2, latitude: 37.7749, longitude: -122.4094, hint: "Check near the park." },
    // Add more hint locations as needed
  ];

  const [currentHint, setCurrentHint] = useState(null);

  useEffect(() => {
    if (userLocation && userLocation.latitude && userLocation.longitude) {
      const nearHint = hintLocations.find(hint =>
        calculateDistance(userLocation, { latitude: hint.latitude, longitude: hint.longitude }) < 0.01
      );

      if (nearHint) {
        setCurrentHint(nearHint.hint);
        Alert.alert('Hint', nearHint.hint);
      } else {
        setCurrentHint(null);
      }
    }
  }, [userLocation]);

  // Rest of the component remains unchanged...

  return (
    <View>
      {currentHint && (
        <View>
          <Text>{currentHint}</Text>
        </View>
      )}
    </View>
  );
};

export default HintsComponent;
