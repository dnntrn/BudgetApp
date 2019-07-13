import React, { Component } from 'react'

import { View, ScrollView, Text, StyleSheet, Dimensions } from 'react-native'

import styles from './styles/budgetStatus.style'

const { width } = Dimensions.get('window')
const height = width * 0.8

class budgetStatus extends Component {
    constructor(props) {
      super(props)
      this.state = {
        health: 'on-track',
      }
    }

    render () {

      const { health } = this.state

      //somehow check user's budget totals and change health accordingly

      let color
      let healthMessage

      switch (health) {
        case ('on-track'):
          color = 'green'
          healthMessage = "Congrats! You're on-track for this month!"
          break

        case ('tight'):
          color = 'yellow'
          healthMessage = "Uh oh. You're budget is looking tight."
          break

        case ('over'):
          color = 'red'
          healthMessage = "Uh oh. You're over budget this month."
          break
      }

      // Idea: eventually turn topConatiner into TouchableOpacity so an animation displays on click!

      return (
        <View style={{width: '100%', padding: '5%'}}>
          <View style={[styles.container, styles.topContainer, { backgroundColor: color }]}>
            <Text>{healthMessage}</Text>
          </View>

          <View style={[styles.container, styles.spacer, styles.bottomContainer]}>
            <Text>Here's what you spent on this month:</Text>
          </View>
        </View>

      )

    }
}

export default budgetStatus
