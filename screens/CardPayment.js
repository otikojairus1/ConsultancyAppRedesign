import { View, Text, Dimensions, StyleSheet} from 'react-native'
import React from 'react'
import { AntDesign,MaterialIcons } from '@expo/vector-icons';

import { FontAwesome5 ,Fontisto} from '@expo/vector-icons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function CardPayment() {
  return (
      <>
           <View style={{height: 50, display:'flex', marginTop:50, flexDirection:'row'}}>
          <View style={{height: 50,flex:1 ,alignItems:'flex-start', justifyContent:'flex-end'}}>
          <View style={styles.wrapper}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
        </View>

          </View>
          <View style={{height: 50, flex:3 , justifyContent:'center'}}>
              <Text style={{fontWeight:'bold', fontSize:20}}>Complete Card Payments</Text>

          </View>


      </View>

    <CreditCardComponent />
    <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:300, marginLeft:30}}>
        <Text style={{ fontSize: 18, fontWeight:'bold'}}>Address</Text>
         <Text style={{fontWeight:'bold', fontSize:18}}>Edit</Text>
    </View>
    
    </>

  
  );
}


// credit card component
function CreditCardComponent(){
    return (
        <View style={{marginTop:50,marginBottom:30 }}>
        <View style={{width:330, elevation:7, display:"flex", flexDirection:'row',  marginLeft:10,height: 230, backgroundColor: 'green',borderRadius:20 }}>
          <View style={{flex:1, paddingTop:10,  paddingLeft:10}}>
              <View style={{flexDirection:'row',}}> 
              <FontAwesome5 name="sim-card" size={40} color="#fff" /> 
              <AntDesign name="wifi" size={24} color="#fff" />
              </View>
  
         <View style={{position:'absolute', top: 190,  left: 25}}>
         <Text style={{color:'#fff', fontSize:30}}>*****80032</Text>
         </View>
  
         <View style={{width:320, alignItems:'center', marginTop:50, height:40, backgroundColor:"#fff"}}>
             <Text style={{fontSize:25, fontWeight:'bold'}}>7236 2873 2739 2709</Text>
         </View>
  
         <View style={{position:'absolute', left:200, top:150,}}>
             <Text style={{color:'#fff', fontWeight:'bold', fontSize:20}}>Valid Till</Text>
             <Text style={{color:'#fff', fontSize:15}}>12/24</Text>
         </View>
  
          </View>
          <View style={{flex:1,}}>
          <View style={{ paddingTop:10}}> 
          <Text style={{color:'#fff', fontSize:20, fontWeight:'bold'}}>Bank Of America</Text>
              <Text style={{color:'#fff', fontSize:16,}}>John Smigla Doe</Text>
            <View style={{position:'absolute', top: 170, left: 80}}> 
             <Fontisto name="mastercard" size={44} color="#fff" /></View>
          </View>
  
      </View> 
            
        </View>
  </View>
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
      marginLeft:10,
      height: 50,
      backgroundColor:"green",
      borderBottomEndRadius: 15,
      borderBottomLeftRadius:13,
      borderTopEndRadius:13,
      borderTopLeftRadius:13,
      marginTop:10
  },
})