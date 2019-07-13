
import React, { Component } from 'react'

import { View, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native'

class HeaderWithRightButton extends Component {

  constructor () {
    super()
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rightButtonContainer}>
          <TouchableOpacity onPress={this.props.onPress} >
            <Text>{this.props.rightButtonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingTop: '5%',
  },
  rightButtonContainer: {
    position: 'absolute',
    right: 10,
    bottom: 0,
    padding: 5,
    marginTop: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default HeaderWithRightButton
