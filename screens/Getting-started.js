import { View, StyleSheet, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';


export default function GettingStarted({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight:"bold"}}>Let's get started choose an option</Text>

      <TouchableOpacity onPress={()=>{
        navigation.navigate('Landing');
      }}>
      <View style={styles.card}>
          <Text style={{position:'absolute', top:45, left:40, fontSize:18, color:"#fff"}}>Get started as a PATIENT and {'\n'}find treatment</Text>
          <View style={styles.floating}><AntDesign name="arrowright" size={20} color="black" /></View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        navigation.navigate('DoctorLanding');
      }}>
      <View style={styles.card}>
          <Text style={{position:'absolute', top:40, left:40, marginBottom:12, fontSize:18, color:"#fff"}}>Get started as a CONSULTANT and {'\n'}share suggestions and sell {'\n'}medications</Text>
          <View style={styles.floating}><AntDesign name="arrowright" size={20} color="black" /></View>
      </View>
      </TouchableOpacity>
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
    card:{
        marginTop:10,
        position:"relative",
        width: 300,
        height: 200,
        textAlign:'center',
        backgroundColor: 'green',
        borderBottomEndRadius: 15,
        borderBottomLeftRadius:13,
        borderTopEndRadius:13,
        borderTopLeftRadius:13,
        
    },
    floating:{
        
        zIndex:1,
        top:95,
        left: 100,
        width: 40,
        height:40,
        backgroundColor:"white",
        borderRadius: 50,
        elevation: 7,
        paddingLeft:10,
        paddingTop:9,
    }

});