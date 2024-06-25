import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

const FifthScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ImageStyle1}>
     <Image source={require('../assets/apple.png')}  style={{marginLeft:20,marginTop:15}}/>
     <View  style={{marginLeft:10}}>
      <Text style={{fontWeight:'500'}}>Apple Store</Text>
      <Text >Entertainment</Text>
      </View>
      
      <View  style={{marginLeft:180}}>
       <Text>-$5,99</Text>
       </View>
       </View>
    </View>
  )
}

export default FifthScreen
const styles=StyleSheet.create({
    container:{
    marginTop:10
    },
    ImageStyle1:{
        display:'flex',
        flexDirection:'row',
        
     
    }

})