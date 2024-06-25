import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const FourthScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Transaction</Text>
      <Text style={{color:'blue'}}>Sell All</Text>
    </View>
  )
}

export default FourthScreen
const styles=StyleSheet.create({
    container:{
      marginLeft:20,
      flexDirection:'row',
      justifyContent:'space-between',
      marginRight:20,
      marginTop:10
    }
})