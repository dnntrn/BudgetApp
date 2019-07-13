
import React, { Component } from 'react';

import { View, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';

import styles from './styles/App.style'

import Carousel from './src/mainCarousel'

import Status from './src/dashboardSlides/budgetStatus'
import Graph from './src/dashboardSlides/budgetGraph'

import Header from './src/components/headerWithRightButton'

class App extends Component {
  render() {
    const slides = [<Status />,<Graph />]

    return (
      <View style={styles.container}>
        <Header onPress={()=>{}} rightButtonText= "Account" />
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <Carousel slides={slides} />
        </ScrollView>
      </View>
    )
  }
}

export default App
