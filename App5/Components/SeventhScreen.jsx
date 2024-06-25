import { View, Text,Image,StyleSheet} from 'react-native'
import React from 'react'

const SeventhScreen = () => {
  return (
    <View>
      <View style={styles.ImageStyle1}>
     <Image source={require('../assets/moneyTransfer.png')}  style={{marginLeft:20,marginTop:15}}/>
     <View  style={{marginLeft:10}}>
      <Text style={{fontWeight:'500'}}>Money Transfer</Text>
      <Text >Transaction</Text>
      </View>
      
      <View  style={{marginLeft:170}}>
       <Text style={{color:'blue'}}>-$300</Text>
       </View>
       </View>
    </View>
  )
}

export default SeventhScreen
const styles=StyleSheet.create({
  container:{
marginTop:19
  },ImageStyle1:{
    display:'flex',
    flexDirection:'row',
    
}
})