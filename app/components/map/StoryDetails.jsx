import React from 'react';
import { View, Text } from 'react-native';

const StoryDetails = ({ route }) => {
  const { category } = route.params;

  return (
    <View>
      <Text>{category.title}</Text>
      <Text>{category.description}</Text>
      {/* Add more details as needed */}
    </View>
  );
};

export default StoryDetails;
