import { View,Dimensions, Text } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HeadAche() {
  return (
    
        <View style={{
            width: windowWidth,
            position: 'absolute',
            top: 40,
            left: 5,
            height: 60,
            display: 'flex',
            flexDirection: 'row',
            justifyContent:'space-between',
            alignItems:'center',
            alignContent:'center',
            backgroundColor:'red',
        }}>
            <View style={{
                position: 'absolute',
                // top: 10,
                // left: 5,
                width: 30,
                height: 30,
                marginLeft:10,
                backgroundColor: '#E6E6FA',
                borderBottomEndRadius: 10,
                borderBottomStartRadius: 10,
                borderTopStartRadius: 10,
                borderTopEndRadius: 10,
                paddingLeft:1,
                paddingTop:3,
            }}>
                 <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
            </View>
            <View style={{
                 position: 'absolute',
                
                 
                 
            }}>
                <Text>HeadAche</Text>
            </View>
        </View>

    
  )
}