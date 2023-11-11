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
});
