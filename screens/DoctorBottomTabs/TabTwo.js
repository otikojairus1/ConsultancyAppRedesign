import { View, Text, Dimensions, Image, TextInput ,TouchableOpacity} from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// conversation layer function

function Conversation({top, navigation,dp}){
    return(
       
        <TouchableOpacity onPress={()=>{navigation.navigate('Chat')}} style={{position:'absolute', marginTop:12, display:'flex', justifyContent:'space-evenly', flexDirection:"row", top:top, marginLeft:10}}>
        <View>
            <Image source={{uri:`https://randomuser.me/api/portraits/men/${dp}.jpg`}} style={{width: 60, height: 60, borderRadius:50}}/>
        </View>
        <View style={{marginLeft:20, marginRight:90}}>
            <Text style={{fontSize: 20, fontWeight:'bold'}}>Dr. Sarena</Text>
            <Text>Hi, Jackson, can you tell...</Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
        <Entypo name="dot-single" size={30} color="green" />

        </View>
        
        
    </TouchableOpacity>
    
    );
}

function Hr(){
    return(
        <View
        style={{
            width:windowWidth*0.9, 
            position:'absolute', 
            top: 340,
            marginLeft:20,
          borderBottomColor: '#D7DCD3',
          borderBottomWidth: 1,
          marginBottom:4,
          
        }}
      />
          
    );
}

export default function TabTwo({navigation}) {
  return (
    <View>
        {/* start of appbar */}
      <View style={{height: 60, marginLeft:5, display:'flex', justifyContent:'space-between' , flexDirection:'row', width: windowWidth, position:"absolute", top:50}} >

        <View style={{height: 60, width: 60, backgroundColor:"green"}}>
            <Image source={require('../../assets/doctors.png')} style={{width: 60, height:60}}/>
        </View>
        <View style={{height: 50, width: 50, alignItems:'center', justifyContent:'center', marginRight:9, backgroundColor:"#D7DCD3", borderTopLeftRadius: 10,borderTopRightRadius:10, borderBottomEndRadius:10, borderBottomStartRadius:10, }}>
        <Feather name="align-right" size={24} color="black" />
        </View>
      </View>
      {/* end of appbar */}

      <Text style={{position: 'absolute', top:130, fontSize:30, marginLeft:10, fontWeight:'bold'}}>Messages</Text>
      {/* search */}

      <View style={{position:'absolute', flexDirection:'row', paddingLeft:15, alignItems:'center', marginLeft:15, top: 190, height:50, width: 300, backgroundColor:'#D7DCD3', borderTopLeftRadius: 10,borderTopRightRadius:10, borderBottomEndRadius:10, borderBottomStartRadius:10,}}>
      <FontAwesome name="search" size={24} color="black" />
      <View style={{width:10}}></View>
      <TextInput placeholder='search' style={{width: '100%', height:"100%"}}/> 
      </View>

      {/* end of search */}

      {/* start of conversation section */}

            <Conversation navigation={navigation}dp={45}top={270}/>
            <View
        style={{
            width:windowWidth*0.9, 
            position:'absolute', 
            top: 340,
            marginLeft:20,
          borderBottomColor: '#D7DCD3',
          borderBottomWidth: 1,
          marginBottom:4,
          
        }}
      />
        <Conversation navigation={navigation} dp={23} top={340}/>
         <View
        style={{
            width:windowWidth*0.9, 
            position:'absolute', 
            top: 420,
            marginLeft:20,
          borderBottomColor: '#D7DCD3',
          borderBottomWidth: 1,
          marginBottom:4,
          
        }}
      />
            <Conversation navigation={navigation} dp={29} top={410 }/>
            <View
        style={{
            width:windowWidth*0.9, 
            position:'absolute', 
            top: 490,
            marginLeft:20,
          borderBottomColor: '#D7DCD3',
          borderBottomWidth: 1,
          marginBottom:4,
          
        }}
      />
            <Conversation navigation={navigation} dp={2} top={500}/>
            <View
        style={{
            width:windowWidth*0.9, 
            position:'absolute', 
            top: 5,
            marginLeft:20,
          borderBottomColor: '#D7DCD3',
          borderBottomWidth: 1,
          marginBottom:4,
          
        }}
      />

      {/* end of conversation section */}


      
    </View>
    
  )
}