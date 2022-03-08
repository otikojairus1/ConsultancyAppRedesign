import { View, Text,Dimensions,StyleSheet ,TextInput} from 'react-native'
import React from 'react'
import { AntDesign,MaterialIcons,FontAwesome } from '@expo/vector-icons';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Pickupstation() {
  return (
    <View style={{height: windowHeight, width:windowWidth, marginTop:40, }}>
     {/* start of appbar */}
     <View style={{height: 50, display:'flex',flexDirection:'row'}}>
          <View style={{height: 50,flex:1 ,alignItems:'flex-start', justifyContent:'flex-end'}}>
          <View style={styles.wrapper}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
        </View>

          </View>
          <View style={{height: 50, flex:3 , justifyContent:'center'}}>
              <Text style={{fontWeight:'bold', fontSize:20}}>Select your pickup Location</Text>

          </View>


      </View>
     {/* end of appbar */}

     <View style={{height:200, marginTop:50, marginBottom:50, justifyContent:'center', alignItems: 'center'}}>
     <FontAwesome name="map-marker" size={200} color="black" />
     </View>

     {/* start of pickup input */}

 


     {/* end of pickup input */}
    </View>
  )
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
})