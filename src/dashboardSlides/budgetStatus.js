import React, { Component } from 'react'

import { View, ScrollView, Text, StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
const height = width * 0.8

class budgetStatus extends Component {
    constructor(props) {
      super(props)
    }

    render () {
      return (
        <View style={{width: '100%', height: '100%'}}>

          <View style={{backgroundColor: this.props.bgColor, width: '100%', height: '100%'}}>
            <Text>Your Budget looks great!</Text>


          </View>


        </View>

      )

    }
}

export default budgetStatus
