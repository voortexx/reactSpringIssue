/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { animated, Spring } from "react-spring";

const AnimatedView = animated(View);

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Text is Displayed</Text>
        <Spring
          from={{ marginLeft: -50, opacity: 0 }}
          to={{ marginLeft: 0, opacity: 1 }}
          config={{ tension: 500 }}
        >
          {props => (
            <AnimatedView style={props}>
              <Text>Text is not animated with DebugMode</Text>
            </AnimatedView>
          )}
        </Spring>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
