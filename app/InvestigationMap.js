// InvestigationMap.js

import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import HintsComponent from './HintsComponent';

const InvestigationMap = () => {
  const [userLocation, setUserLocation] = useState(null);

  // Update user location (you can use the real-time location logic here)

  // Specify the region you want to focus on
  const initialRegion = {
    latitude: 37.7749, // Center latitude of the region
    longitude: -122.4194, // Center longitude of the region
    latitudeDelta: 0.1, // Difference between the maximum and minimum latitude to be displayed
    longitudeDelta: 0.1, // Difference between the maximum and minimum longitude to be displayed
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={initialRegion}
        // Map properties...
      >
        {/* Add markers for checkpoints */}
        <Marker
          coordinate={{ latitude: 37.7749, longitude: -122.4194 }}
          title="Checkpoint 1"
          description="Solve the riddle to unlock the next location!"
        />
        {/* Add more markers as needed for other checkpoints */}

        {/* Add markers for hint locations */}
        <Marker coordinate={{ latitude: 37.7749, longitude: -122.4194 }} />
        <Marker coordinate={{ latitude: 37.7749, longitude: -122.4094 }} />
        {/* Add more markers for other hint locations */}
      </MapView>

      {/* Integrate HintsComponent */}
      <HintsComponent userLocation={userLocation} />
    </View>
  );
};

export default InvestigationMap;
