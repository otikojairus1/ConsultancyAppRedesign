import { View, Text,Dimensions,StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'
import { AntDesign,MaterialIcons,FontAwesome } from '@expo/vector-icons';
import { Select ,CheckIcon} from "native-base";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function Pickupstation({navigation, route}) {
  const {cost} = route.params;
  let [location, setLocation] = React.useState("");
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

<View style={{ marginLeft:40, marginRight:40}}>


<Select selectedValue={location} minWidth="200" accessibilityLabel="Choose your Drop off location" placeholder="Choose your Drop off location" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setLocation(itemValue)}>
          <Select.Item label="London" value="London" />
          <Select.Item label="Cambridge" value="cambridge" />
          <Select.Item label="New York" value="newyork" />
          <Select.Item label="Marseille" value="marseille" />
          <Select.Item label="Dortmund" value="dortmund" />
        </Select>
</View>

<TouchableOpacity onPress={()=>navigation.navigate('Card Payment',{"cost":cost})}>
    <View style={styles.button}> 
      <Text style={{position:'absolute', left:130, marginTop:15, fontSize:20, fontWeight:'bold', color:"#fff" }}>Next</Text>
      
      </View>
      </TouchableOpacity>
  


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