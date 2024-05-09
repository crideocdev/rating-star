
//instalar las siguientes dependencias
/*
npm install @rneui/themed @rneui/base
npm install @rneui/base@edge @rneui/themed@edge
*/
import React from 'react';
import { StyleSheet, View, Platform, ScrollView } from 'react-native';
import { Rating } from '@rneui/themed';

const Ratings = () => {
  const ratingCompleted = (rating) => {
    console.log('Rating is: ' + rating);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.viewContainer}>
        <View style={styles.ratingContainer}>
          <Rating
            showRating
            imageSize={40}
            onFinishRating={ratingCompleted}
            style={styles.rating}
          /> 
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,
  },
  ratingContainer: {
    marginTop:30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  rating: {
    paddingVertical: 10,
  },
});

export default Ratings;
