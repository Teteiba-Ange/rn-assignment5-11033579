import { View, Text,Image,StyleSheet } from 'react-native';
import React from 'react';

const FirstScreen = () => {
  return (
    
    <View >
     <Image source={require('../assets/iPhone X (or newer).png')}/>
     <View style={styles.container}>
     
     <View style={styles.ImageStyle1}>
     <Image source={require('../assets/profile.png')}  style={{marginLeft:20}}/>
     <View  style={{marginLeft:10}}>
      <Text>Welcome Back,</Text>
      <Text style={{fontWeight:'500'}}>Angela Acquah</Text>
      </View>
      
      <View  style={{marginLeft:170}}>
       <Image source={require('../assets/search.png')} />
       </View>
       </View>
      </View>
       
       
    </View>
  )
}

export default FirstScreen
const styles=StyleSheet.create({
    container:{
    },
    ImageStyle1:{
        display:'flex',
        flexDirection:'row',
        
     
    }
})