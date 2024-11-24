import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Arigato Mosang Maseng</Text>
      <View style={styles.boxContainer}>
        <View style={styles.box1} />
        <View style={styles.box2} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cacfd2', // Latar belakang abu-abu terang
  },
  text: {
    fontSize: 24,
    color: '#5dade2',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: '#633974', // 
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: '#34495e', // 
  },
});

export default MyComponent;