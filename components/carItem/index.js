import React from "react";
import { View, Text, ImageBackground } from "react-native";

import styles from './styles';
import StyledButton from "../styledButton";

const carItem = (param) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../assets/images/ModelX.jpeg')}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Model X</Text>
        <Text style={styles.subtitle}>Starting at $68,147</Text>
      </View>

      <StyledButton />

    </View>
  );
};

export default carItem;