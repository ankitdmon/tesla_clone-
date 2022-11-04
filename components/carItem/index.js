import React from "react";
import { View, Text, ImageBackground } from "react-native";

import StyledButton from "../styledButton";
import styles from './styles';

const carItem = (props) => {
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

      <StyledButton
          type="primary"
          content={"custom Inventory"}
          onPress={() => {
            console.warn("Custom order was pressed");
          }}
        />

      <StyledButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Existing Inventory was pressed");
          }}
        />

    </View>
  );
};

export default carItem;