import { View, Text, Dimensions} from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function CardPayment() {
  return (
    <View style={{height: windowHeight, width:windowWidth, marginTop:40, backgroundColor:"green"}}>
      <Text>workingw</Text>
    </View>
  )
}