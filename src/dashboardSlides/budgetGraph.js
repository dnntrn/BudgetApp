import React from 'react'

import { View, Text } from 'react-native'

import { ProgressCircle } from 'react-native-svg-charts'

import styles from './styles/budgetGraph.style'
class BudgetGraph extends React.PureComponent {

    constructor(props) {
      super (props)
    }

    render() {

      // dummy progress value for window
      // TODO: change progress value based on user's progress in budget

      let progress = 0.7

      let progressPercent = progress * 100

      return (
        <View style={ styles.container }>
          <ProgressCircle style={ styles.graph } progress={ progress } progressColor={ 'rgb(134, 65, 244)' } />
          <View style= { styles.infoContainer }>
            <Text>{ progressPercent }% of your budget was spent on: </Text>
          </View>
        </View>
      )
    }
}



export default BudgetGraph
