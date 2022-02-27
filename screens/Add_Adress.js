import { View, StyleSheet, TextInput, Dimensions,Text, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react'
import MapView from 'react-native-maps';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Add_Adress({navigation}) {
  return (
      <>
    <View style={styles.wrapper}>
      <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
    </View>
    <View style={{height: windowHeight,marginLeft:17, width: windowWidth, position:"absolute", top: 150}}>
    <Text style={{fontSize: 35, fontWeight:'bold', color:'green'}}>Add your address to get started</Text>
 
    <View style={{height: 20}}></View>
    <View style={{backgroundColor: '#fff', elevation:7, height:65, justifyContent:'center',  
    borderBottomEndRadius: 20,
    borderBottomLeftRadius:20,
    borderTopEndRadius:20,
    borderTopLeftRadius:20,
    width:windowWidth*0.9, paddingBottom:2, marginBottom:5, paddingTop:2, paddingLeft:9}}>
    <TextInput placeholder='Street Address' /> 
    </View>

    <View style={{backgroundColor: '#fff', elevation:7, height:65, justifyContent:'center',  
    borderBottomEndRadius: 20,
    borderBottomLeftRadius:20,
    borderTopEndRadius:20,
    borderTopLeftRadius:20,
    width:windowWidth*0.9, paddingBottom:2, marginBottom:5, paddingTop:2, paddingLeft:9}}>
    <TextInput placeholder='Apartment Number' /> 
    </View>

    <View style={{backgroundColor: '#fff', elevation:7, height:65, justifyContent:'center',  
    borderBottomEndRadius: 20,
    borderBottomLeftRadius:20,
    borderTopEndRadius:20,
    borderTopLeftRadius:20,
    width:windowWidth*0.9, paddingBottom:2, paddingTop:2, paddingLeft:9}}>
    <TextInput placeholder='City' /> 
    </View>

    <View style={{backgroundColor: '#fff', elevation:7, marginTop:10, height:65, justifyContent:'center',  
    borderBottomEndRadius: 20,
    borderBottomLeftRadius:20,
    borderTopEndRadius:20,
    borderTopLeftRadius:20,
    width:windowWidth*0.9, paddingBottom:2, paddingTop:2, paddingLeft:9}}>
    <TextInput secureTextEntry={false} placeholder='Zip code' /> 
    </View>
    {/* mapview */}

    <MapView
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />

   

    {/* button */}
    <TouchableOpacity onPress={()=>navigation.navigate('Dashboard')}>
    <View style={styles.button}> 
      <Text style={{position:'absolute', left:130, marginTop:15, fontSize:20, fontWeight:'bold', color:"#fff" }}>Get Started</Text>
      
      </View>
      
      </TouchableOpacity>

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
  