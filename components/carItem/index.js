import React from "react";
import { View, Text, ImageBackground } from "react-native";

import StyledButton from "../styledButton";
import styles from './styles';

const carItem = (props) => {

  const { name, tagLine, tagLineCTA, image } = props;

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}> {name} </Text>
        <Text style={styles.subtitle}>
          {tagLine}
          <Text style={styles.subtitleCTA}> {tagLineCTA} </Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
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

    </View>
  );
};

export default carItem;