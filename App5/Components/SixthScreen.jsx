import { View, Text ,Image,StyleSheet} from 'react-native'
import React from 'react'

const SixthScreen = () => {
  return (
    <View style={StyleSheet.container}>
      <View style={styles.ImageStyle1}>
     <Image source={require('../assets/spotify.png')}  style={{marginLeft:20,marginTop:15}}/>
     <View  style={{marginLeft:10}}>
      <Text style={{fontWeight:'500'}}>Spotify</Text>
      <Text >Music</Text>
      </View>
      
      <View  style={{marginLeft:225}}>
       <Text>-$12,99</Text>
       </View>
       </View>
    </View>
  )
}

export default SixthScreen
const styles=StyleSheet.create({
    container:{
      marginTop:20
    }, ImageStyle1:{
      display:'flex',
      flexDirection:'row',
      
   
  }
})