import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white', // Adjust color for dark fantasy mode
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: 'white', // Adjust color for dark fantasy mode
  },
  map: {
    flex: 1,
    width: '100%',
  },
  customMarker: {
    backgroundColor: 'purple', // Adjust color for dark fantasy mode
    borderRadius: 15,
    padding: 10,
  },
  markerText: {
    color: 'white', // Adjust color for dark fantasy mode
    fontWeight: 'bold',
  },
  stepCountContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  stepCountText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
  },
  directionsButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: 'rgba(128, 0, 128, 0.7)', // Purple color
    padding: 8,
    borderRadius: 8,
      },
  directionsButtonText: {
    color: 'white', // White text for better visibility
    fontWeight: 'bold',
  },
});

export const customMapStyle = [
               {
                   elementType: 'geometry',
                   stylers: [
                       {
                           color: '#1a1a1a', // Dark background color
                       },
                   ],
               },
               {
                   elementType: 'labels.text.stroke',
                   stylers: [
                       {
                           color: '#1a1a1a',
                       },
                   ],
               },
               {
                   elementType: 'labels.text.fill',
                   stylers: [
                       {
                           color: '#666666', // Lighter text color
                       },
                   ],
               },
               {
                   featureType: 'administrative.locality',
                   elementType: 'labels.text.fill',
                   stylers: [
                       {
                           color: '#d59563',
                       },
                   ],
               },
               {
                   featureType: 'poi',
                   elementType: 'labels.text.fill',
                   stylers: [
                       {
                           color: '#d59563',
                       },
                   ],
               },
               {
                   featureType: 'poi.park',
                   elementType: 'geometry',
                   stylers: [
                       {
                           color: '#4d754d', // Dark green park areas
                       },
                   ],
               },
               {
                   featureType: 'road',
                   elementType: 'geometry',
                   stylers: [
                       {
                           color: '#808080', // Gray roads
                       },
                   ],
               },
               {
                   featureType: 'road',
                   elementType: 'labels.text.fill',
                   stylers: [
                       {
                           color: '#cc99ff', // Lighter purple road labels
                       },
                   ],
               },
               {
                   featureType: 'road.arterial',
                   elementType: 'geometry.stroke',
                   stylers: [
                       {
                           color: '#993399', // Dark purple arterial roads
                       },
                   ],
               },
               {
                   featureType: 'road.local',
                   elementType: 'geometry.stroke',
                   stylers: [
                       {
                           color: '#660066', // Dark purple local roads
                       },
                   ],
               },
               {
                   featureType: 'transit',
                   elementType: 'labels.text.fill',
                   stylers: [
                       {
                           color: '#996666', // Brown transit labels
                       },
                   ],
               },
               {
                   featureType: 'water',
                   elementType: 'geometry.fill',
                   stylers: [
                       {
                           color: '#001f3f', // Dark blue sea
                       },
                   ],
               },
               // Add more styles based on your preferences
           ];

