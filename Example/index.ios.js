/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import * as ScreenshotDetector from 'react-native-screenshot-detector';
import {
  Alert,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Example extends Component {
  componentDidMount() {
    this.eventEmitter = ScreenshotDetector.subscribe(() => {
      Alert.alert('Screenshot detected!');
    });
  }

  componentWillUnmount() {
    ScreenshotDetector.unsubscribe(this.eventEmitter);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Screenshot Detector!
        </Text>
        <Text style={styles.instructions}>
          Take a screenshot to test it out!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Example', () => Example);
