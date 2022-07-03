import React from 'react'
import { Text, View } from 'react-native'
import { AlarmItemStyles } from './styles'

const AlarmItem = () => {
    
  return (
    <View style={AlarmItemStyles.RootContainer}>
        <Text>19:30</Text>
        <Text>M,J,1</Text>
    </View>
  )
}


export default AlarmItem