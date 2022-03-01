import { View, Text, Dimensions,Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const {width} = Dimensions.get('window')
const oval1Width = width * 1.25;
const oval2Width = width * 0.4;

export default function ProductDetails() {
  return (
    <View style={{height: windowHeight, width:windowWidth, marginTop:40}}>

      
      <View style={{
         position: 'absolute',
         width: oval1Width,
         height: oval1Width,
         borderRadius: oval1Width / 2,
         backgroundColor: '#DAE4D7',
         top: -95,
         left: -40
      }}>
        <View style={{height: 200, width:200, position:'absolute', top:178,left:115,}}>
        <Image source={require('../assets/bottle.jpg')} style={{ height:200, width:200,  }}/>
        </View>
         
      </View>

      {/* end of image overlay */}

      <View style={{height: 260, marginTop: 370, marginBottom:5}}>
        <Text style={{fontSize: 30, fontWeight:'bold'}}>Benazepril Hydrochloride</Text>
        <Text style={{fontSize: 30, fontWeight:'bold'}}>(Lotenzin)</Text>
        <Text style={{marginTop:10, fontWeight:'bold', fontSize:25}}>Details</Text>
        <Text style={{marginTop:1, fontSize:18}}>

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, fringilla tincidunt arcu, urna neque arcu. Elit tristique velit consectetur metus tortor amet. Maecenas phasellus feugiat accumsan sed tempus aliquam interdum. fringilla tincidunt arcu, urna neque arcu. Elit tristique velit consectetur metus tortor amet. Maecenas phase
        </Text>
      </View>

      {/* start of quantity section */}

      <View style={{height:50,display:'flex', flexDirection:"row"}}>

        <View style={{height: 40, width: 40,marginLeft:10, paddingLeft:8, paddingTop:5, borderRadius:10, borderColor:"black", borderWidth:3}}>
        <AntDesign name="plus" size={20} color="black" />
        </View>

        <Text style={{fontSize:20, marginLeft:5, marginTop:8, fontWeight:'bold'}}>1</Text>

        <View style={{height: 40, width: 40,marginLeft:10, paddingLeft:8, paddingTop:5, borderRadius:10, borderColor:"black", borderWidth:3}}>
        <AntDesign name="minus" size={20} color="black" />
        </View>

      </View>


      {/* end of quantity section */}

      {/* submit section */}

      <View style={{ height: 60,backgroundColor:"green"}}>

        <View>

        </View>
        <View>
          
        </View>
      </View>

      
    </View>
  )
}