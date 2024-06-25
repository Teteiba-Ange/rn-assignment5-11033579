import { View, Text,Image, StyleSheet } from 'react-native'
import React from 'react'

const ThirdSection = () => {
  return (
    <View style={styles.container}>
      <View>
      <Image source={require('../assets/send.png')}/>
      <Text>Sent</Text>
      </View>
      <View>
        <Image source={require('../assets/recieve.png')}/>
        <Text>Recieve</Text>
      </View>
      <View>
        <Image source={require('../assets/loan.png')}/>
        <Text>Loan</Text>
        </View> 
        <View>
            <Image source={require('../assets/topUp.png')}/>
            <Text>Topup</Text>
        </View>
      
      
    </View>
  )
}

export default ThirdSection
const styles=StyleSheet.create({
    container:{
        marginTop:10,
        marginLeft:20,
        flexDirection:'row',
        justifyContent:'space-between',
        marginRight:20
    }
})