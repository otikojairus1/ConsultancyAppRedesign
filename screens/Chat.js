import { View, Text ,Dimensions} from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Chat() {
  return (
    <View style={{width: windowWidth, height:windowHeight, backgroundColor:'red'}}>
      <Text>Chat</Text>
    </View>
  )
}