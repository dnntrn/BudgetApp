import React, { Component } from 'react';

import { View, ScrollView } from 'react-native';

import Status from './dashboardSlides/budgetStatus'

import styles from './styles/mainCarousel.style'
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
    console.log('Please provide slides');
    return null;
  }
}

export default mainCarousel
