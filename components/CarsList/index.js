import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';

import cars from './cars';
import styles from './styles.js';
import CarItem from '../carItem';

const CarsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({item}) => <CarItem car={item} />}
      />
    </View>
  );
};

export default CarsList;