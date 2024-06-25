import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import NinthScreen from './Components/NinthScreen'

const SettingsScreen = () => {
  return (
    <View style={StyleSheet.container}>
      <Text style={{ fontWeight:500,fontSize:48,justifyContent:'center'}}>Settings</Text>
      <View>
      <NinthScreen/>
      </View>
    </View>
  )
}

export default SettingsScreen
const styles=StyleSheet.create({
  container:{
    flex:1,
  }
})