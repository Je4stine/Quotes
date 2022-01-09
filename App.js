import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Homepage from './Components/Homepage';


export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <Homepage />
        <StatusBar style="auto" />
      </SafeAreaView>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#87CEEB',
  },
});
