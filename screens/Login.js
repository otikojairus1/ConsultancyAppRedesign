import { View, StyleSheet, TextInput, Dimensions,Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Login() {
  return (
      <>
    <View style={styles.wrapper}>
      <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
    </View>
    <View style={{height: 200,marginLeft:17, width: windowWidth, position:"absolute", top: 200}}>
    <Text style={{fontSize: 35, fontWeight:'bold', color:'green'}}>Hello Again!</Text>
    <Text style={{fontSize: 35, fontWeight:'bold', color:'green'}}>Welcome </Text>
    <Text style={{fontSize: 35, fontWeight:'bold', color:'green'}}>Back </Text>
    <View style={{height: 20}}></View>
    <View style={{backgroundColor: '#fff', elevation:7, height:65, justifyContent:'center',  
    borderBottomEndRadius: 20,
    borderBottomLeftRadius:20,
    borderTopEndRadius:20,
    borderTopLeftRadius:20,
    width:windowWidth*0.9, paddingBottom:2, paddingTop:2, paddingLeft:9}}>
    <TextInput placeholder='Email Address' /> 
    </View>

    <View style={{backgroundColor: '#fff', elevation:7, marginTop:10, height:65, justifyContent:'center',  
    borderBottomEndRadius: 20,
    borderBottomLeftRadius:20,
    borderTopEndRadius:20,
    borderTopLeftRadius:20,
    width:windowWidth*0.9, paddingBottom:2, paddingTop:2, paddingLeft:9}}>
    <TextInput secureTextEntry={true} placeholder='Password' /> 
    </View>

    <View style={{marginLeft: 220, marginTop:10}}><Text style={{fontWeight:'bold', fontStyle:'italic'}}>Forgot Password?</Text></View>

    {/* button */}
    <View style={styles.button}> 
      <Text style={{position:'absolute', left:130, marginTop:15, fontSize:20, fontWeight:'bold', color:"#fff" }}>Sign In</Text>
      
      </View>
      <View style={{marginLeft: 10, marginTop:10}}><Text style={{fontWeight:'bold', fontStyle:'italic'}}>Dont have an account? Sign up</Text></View>

    </View>
  
    </>
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
    backbtn:{
        width:30,
        height:30,
        backgroundColor:'black'
    },
    wrapper:{
        height: 36,
        width: 36,
        marginLeft:12,
        paddingLeft:5,
        paddingTop:5,
        position:"absolute",
        top:50,
        backgroundColor:"#CAC4C3",
        borderBottomEndRadius: 8,
        borderBottomLeftRadius:8,
        borderTopEndRadius:8,
        borderTopLeftRadius:8,
        
    },
    
    button:{
        width: 325,
        height: 50,
        backgroundColor:"green",
        borderBottomEndRadius: 15,
        borderBottomLeftRadius:13,
        borderTopEndRadius:13,
        borderTopLeftRadius:13,
        marginTop:10
    }
  });
  