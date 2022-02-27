
import React, { useEffect } from 'react'
import { View, StyleSheet,Dimensions,Text, Image } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
const windowWidth = Dimensions.get('window').width;

const {width} = Dimensions.get('window')
const oval1Width = width * 1.25;
const oval2Width = width * 0.7;

export default function Splash({navigation}) {
  useEffect(
    function (){
      setTimeout(function(){ 
        navigation.navigate('Getting Started');
      }, 1000);
    }
  );
  return (
    <View style={styles.container}>
      <Image source={require('../assets/splash-image.png') } style={styles.tinyLogo}/>
      <View style={{ top:600, zIndex:1, position:"absolute", color:'black'}}>
      <FontAwesome5 name="hand-holding-medical" size={35} color="#fff" />
      </View>
     
      <Text style={{ top:640, zIndex:1, position:"absolute", fontSize:23, fontWeight:"bold", color:'#fff'}}>MediTruth</Text>
       <View style={styles.oval1} >
      
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      position:"relative"
    },

   oval1: {
    
    position: 'absolute',
    width: oval1Width,
    height: oval1Width,
    borderRadius: oval1Width / 2,
    backgroundColor: 'green',
    bottom: -130,
    left: -35
  },
  tinyLogo: {
    position:'absolute',
    top: 140,
    left: 23,

    width: windowWidth,
    height: 300,
  },
  });
  