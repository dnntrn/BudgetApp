import React, { Component } from 'react';

import { View, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';

import Status from './dashboardSlides/budgetStatus'


const { width } = Dimensions.get('window');
const height = width * 0.8

class mainCarousel extends Component {
    constructor(props) {
      super(props)
      this.state = {
        activeTab : 0
      }
    }

    render () {
      const { slides } = this.props;
      if (slides && slides.length) {
        return (
          <View style={styles.scrollContainer}>
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={true} >
            {slides.map(slides => (
              <View style={styles.slide}>
                {slides}
              </View>
            ))}
            </ScrollView>
          </View>
      )

    }
    console.log('Please provide images');
    return null;
  }
}

const styles = StyleSheet.create({
  slide: {
    width,
    height,
  },
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

export default mainCarousel
