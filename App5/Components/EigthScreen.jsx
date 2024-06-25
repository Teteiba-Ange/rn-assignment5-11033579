import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

const EigthScreen = () => {
  return (
    <View>
       <View style={styles.ImageStyle1}>
     <Image source={require('../assets/grocery.png')}  style={{marginLeft:20,marginTop:15}}/>
     <View  style={{marginLeft:10}}>
      <Text style={{fontWeight:'500'}}>Money Transfer</Text>
      <Text >Transaction</Text>
      </View>
      
      <View  style={{marginLeft:170}}>
       <Text>-$88</Text>
       </View>
       </View>
    </View>
  )
}

export default EigthScreen
const styles=StyleSheet.create({
  container:{
    marginTop:20
  },ImageStyle1:{
    display:'flex',
    flexDirection:'row',
}
})