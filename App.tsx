import React, { useState, useContext } from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.topText}>To-do List</Text>
        </View>
        <View style={styles.middle}>
          <Text style={styles.text}>Textz</Text>
        </View>
      </View>
    </>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 25,
  },
  top: {
    backgroundColor: 'skyblue',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topText: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
  middle: {
    flex: 1,
    backgroundColor: '#333',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
