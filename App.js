import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarsList from './components/carItem';

export default function App() {
  return (
    <View style={styles.container}>

      <CarsList 
        name= {"Model X"}
        tagLine= {"Order Online for"}
        tagLineCTA= {"Touchless Delivery"}
        image= {require('./assets/images/ModelX.jpeg')}
        />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});