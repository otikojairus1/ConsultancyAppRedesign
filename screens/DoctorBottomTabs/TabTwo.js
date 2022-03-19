import { View, Text, Dimensions, Image, TextInput , ScrollView,TouchableOpacity} from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import axios from 'axios';
import { BASE_URL } from '../../API_KEY'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// conversation layer function

function Conversation({email,name, navigation,dp}){

    return(
      <View style={{}}>
       
        <TouchableOpacity onPress={()=>{navigation.navigate('Chat',{'name':name})}} style={{   justifyContent:'space-evenly', flexDirection:"row", marginTop:10, marginLeft:10}}>
        <View>
            <Image source={{uri:`https://randomuser.me/api/portraits/men/${dp}.jpg`}} style={{width: 60, height: 60, borderRadius:50}}/>
        </View>
        <View style={{marginLeft:20, marginRight:90}}>
            <Text style={{fontSize: 20, fontWeight:'bold'}}>Dr. {name}</Text>
            <Text>{email}</Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Entypo name="dot-single" size={30} color="green" />
        </View>
        
        
    </TouchableOpacity>
    </View>
    
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

export default function TabTwo({navigation, doctors}) {
  const[doctorState, setDoctors] = React.useState([]);
  React.useEffect(()=>{
    setDoctors(doctors);
  console.log(doctorState);
  },[])


  return (
    <View style={{}}>
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

      <View style={{ flexDirection:'row', paddingLeft:15, alignItems:'center', marginLeft:15, marginTop: 200, height:50, width: 300, backgroundColor:'#D7DCD3', borderTopLeftRadius: 10,borderTopRightRadius:10, borderBottomEndRadius:10, borderBottomStartRadius:10,}}>
      <FontAwesome name="search" size={24} color="black" />
      <View style={{width:10}}></View>
      <TextInput placeholder='search' style={{width: '100%', height:"100%"}}/> 
      </View>

      {/* end of search */}

      {/* start of conversation section */}


       
        <ScrollView style={{height:500}}>
      
     { doctors.map((element)=>{
          return(
          
        <Conversation email={element.email}name={element.name} navigation={navigation}dp={45}top={270}/>
     

          );
      })}
         </ScrollView>
      
      
        
    

      {/* end of conversation section */}


      
    </View>
    
  )
}