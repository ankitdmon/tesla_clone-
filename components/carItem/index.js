import React from "react";
import { View, Text, ImageBackground } from "react-native";

import stylesButton from '../stylesButton'
import styles from './styles';

const carItem = (param) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../assets/images/ModelX.jpeg')}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Model 3</Text>
        <Text style={styles.subtitle}>Starting at $68,147</Text>
      </View>

      <stylesButton />

    </View>
  );
};

export default carItem;