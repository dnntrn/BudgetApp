
import React, { Component } from 'react';

import { View, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';


import Carousel from './src/mainCarousel'

import Status from './src/dashboardSlides/budgetStatus'
import Graph from './src/dashboardSlides/budgetGraph'

const { width } = Dimensions.get('window');
const height = width * 0.8

class App extends Component {
  render() {
    const images = [<Status bgColor={"blue"} />,<Graph />]

    return (
      <View style={styles.container}>
        <Carousel slides={images} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  scrollContainer: {
    height,
  },
  image: {
    width,
    height,
  },
});

export default App
