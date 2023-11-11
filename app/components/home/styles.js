// HomeScreenStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#311b92', // Dark purple background color
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#ffffff', // White text color
  },
  storyCard: {
    backgroundColor: '#512da8', // Dark purple card background color
    borderRadius: 10,
    padding: 20,
    marginVertical: 12,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  storyImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  storyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff', // White text color
  },
  storyDescription: {
    fontSize: 14,
    color: '#d1c4e9', // Light purple text color
    marginTop: 8,
  },
});

export default styles;
