import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import FirstScreen from './Components/FirstScreen'
import SecondScreen from './Components/SecondScreen'
import ThirdSection from './Components/ThirdSection'
import FourthScreen from './Components/FourthScreen'
import FifthScreen from './Components/FifthScreen'
import SixthScreen from './Components/SixthScreen'
import SeventhScreen from './Components/SeventhScreen'
import EigthScreen from './Components/EigthScreen'
const HomeScreen = () => {
  return (
    <View style={styles.container}>
       
      <FirstScreen/>
      <SecondScreen/>
      <ThirdSection/>
      <FourthScreen/>
      <FifthScreen/>
      <SixthScreen/>
      <SeventhScreen/>
      <EigthScreen/>
    </View>
  )
}

export default HomeScreen
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-between'
  }
})