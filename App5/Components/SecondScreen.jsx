import { View, Text,Image} from 'react-native'
import React from 'react'

const SecondScreen = () => {
  return (
    <View style={{marginTop:20,marginLeft:20}}>
      <Image source={require('../assets/Card.png')}/>
    </View>
  )
}

export default SecondScreen