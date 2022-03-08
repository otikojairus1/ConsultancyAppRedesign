import { View, Text,Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Cart({navigation}) {
  return (
    <View style={{width: windowWidth, height:windowHeight, marginTop:40, }}>
      
      {/* appbar */}
      
      <View style={{height: 40}}> 
      <View style={{width: 40, paddingLeft:4, paddingTop:7, height:40, backgroundColor:'blue', borderRadius:7, backgroundColor:'#CED6C7'}}>
      <AntDesign name="arrowleft" size={25} color="black" />
      </View>
      
      </View>
      {/* end off appbar */}

      {/* text */}
        <View style={{marginLeft: 15, marginTop:10}}>

        <Text style={{fontSize:20, fontWeight:'bold'}}>Cart</Text>
        </View>

      {/* end of text */}
      {/* start of cards */}



      <Card />
      <Card />
      <Card />
      <Card />
      {/* end of cards */}

     <View style={{height:100, marginTop:200, display:'flex', flexDirection:'row', backgroundColor:"green"}}>

    <View style={{flex:4,paddingLeft:15}}>
      <Text style={{ fontSize: 20, color:"#fff"}}>Total price of medicine</Text>
      <Text style={{fontSize:30, color:'#fff', fontWeight:'bold'}}>$90.00</Text>

    </View>

    <TouchableOpacity onPress={()=>navigation.navigate('Pick Up')} style={{flex:1, paddingTop:7}}>

      <View style={{height:50, width:50, borderRadius:50, paddingLeft:10, paddingTop:10, backgroundColor:"#fff"}}>
      <AntDesign name="arrowright" size={25} color="black" />
      </View>
      <Text style={{ color:'#fff'}}>CheckOut</Text>
    </TouchableOpacity>

    </View> 

      {/* start of footer */}


      {/* end of footer */}

    </View>
  )
}



function Card(){
    return (

    

      <View style={{width:330, marginBottom:10, flexDirection:'row', marginLeft:10, marginRight:20, borderRadius:10, elevation:7, height:85, backgroundColor:'#fff', }}>
      <View style={{width: 70, flex:1, marginLeft:1, height:70, paddingBottom:10, paddingTop:10}}>
      <Image source={require('../assets/bottle.jpg')} style={{ height:60, width:70,  }}/>
      </View>
      <View style={{flex: 3,}}>
          <View style={{ paddingTop:10, paddingLeft:7}}>
              <Text style={{ fontSize:20, fontWeight:'bold'}}>Vitamin D plus</Text>
          </View>
          <View style={{ paddingTop:0, paddingLeft:7}}>
              <Text style={{ fontSize:15, fontWeight:'bold'}}>Vitamin D plus</Text>
          </View>
          <View style={{ paddingTop:0, paddingLeft:7}}>
              <Text style={{ fontSize:15, color:"green", fontWeight:'bold'}}>$30.00</Text>
          </View>
          
      </View>
      <View style={{flex:1, paddingTop:5}}>

          <View style={{height:27, width:27, borderWidth:2, borderRadius:7, paddingLeft:4, paddingTop:3, borderColor:'black'}}>
          <AntDesign name="plus" size={15} color="black" />
          </View>

          <View style={{ marginLeft:8}}>
        <Text>1</Text>
          </View>

          <View style={{height:27, width:27, borderWidth:2, borderRadius:7, paddingLeft:4, paddingTop:3, borderColor:'black'}}>
          <AntDesign name="minus" size={15} color="black" />
          </View>
          
      </View>
    </View> 



    );
}