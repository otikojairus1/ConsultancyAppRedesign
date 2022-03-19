import { View, Text, Dimensions, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { AntDesign,MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { FontAwesome5 ,Fontisto} from '@expo/vector-icons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function PaymentDone({navigation}) {
  return (
      <>
           <View style={{height: 50, display:'flex', marginTop:50, flexDirection:'row'}}>
          <View style={{height: 50,flex:1 ,alignItems:'flex-start', justifyContent:'flex-end'}}>
          <View style={styles.wrapper}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
        </View>

          </View>
          <View style={{height: 50, flex:3 , justifyContent:'center'}}>
              <Text style={{fontWeight:'bold', fontSize:20}}>Payment received successfully</Text>

          </View>
          <View style={{width: 300, height: 300, position:"absolute", justifyContent:"center", alignItems:'center', top:200, left:30, }}>
          <MaterialCommunityIcons name="check-decagram" size={280} color="green" />
          <Text style={{fontSize:24,}}>Payment received successfully</Text>
          </View>
         


      </View>

 
  

    <TouchableOpacity onPress={()=>navigation.goBack()}>
    <View style={styles.button}> 
      <Text style={{position:'absolute', left:80, marginTop:15, fontSize:20, fontWeight:'bold', color:"#fff" }}>Continue Shopping</Text>
      
      </View>
      </TouchableOpacity>
    
    </>

  
  );
}




const styles = StyleSheet.create({
    wrapper:{
        height: 36,
        width: 36,
        marginLeft:12,
        paddingLeft:5,
        paddingTop:5,
     
        backgroundColor:"#CAC4C3",
        borderBottomEndRadius: 8,
        borderBottomLeftRadius:8,
        borderTopEndRadius:8,
        borderTopLeftRadius:8,
        
    },
    
    button:{
      width: 300,
      marginLeft:30,
      height: 50,
      backgroundColor:"green",
      borderBottomEndRadius: 15,
      borderBottomLeftRadius:13,
      borderTopEndRadius:13,
      borderTopLeftRadius:13,
      marginTop:590
  },
})