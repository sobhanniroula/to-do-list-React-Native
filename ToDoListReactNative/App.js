import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import RootComponent from './src/navigation/RootComponent';


export default class App extends Component {
  render() {
    return (
      
      <View style={styles.container}>

        <RootComponent />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009977',
  }
});
