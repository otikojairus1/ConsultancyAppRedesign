import { View, Text ,Dimensions,Image,TextInput,ScrollView} from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Chat() {
  return (
   
    <View style={{width: windowWidth, height:windowHeight, display:"flex", flexDirection:'row', position:'absolute', top: 50}}>
      <View style={{height: 40, width: 40, paddingLeft:6, paddingTop:6, backgroundColor:"#D7DCD3", marginLeft:15, borderRadius:10}}>
      <MaterialIcons name="keyboard-arrow-left" size={24} color="green" />
      </View>
      <View style={{height: 50, width: 60, marginLeft:80}}>
      <Image source={{uri:`https://randomuser.me/api/portraits/men/45.jpg`}} style={{width: 60, height: 60, borderRadius:50}}/>
      <Text style={{ fontSize: 15, fontWeight:'bold'}}>Dr. Sarena</Text>
      </View>
      <ChatComponent />

      <View style={{position:'absolute', flexDirection:'row', paddingLeft:7, alignItems:'center', marginLeft:5, top: 670, height:50, width: 300, backgroundColor:'#D7DCD3', borderTopLeftRadius: 10,borderTopRightRadius:10, borderBottomEndRadius:10, borderBottomStartRadius:10,}}>
      {/* <FontAwesome name="search" size={24} color="black" /> */}
      <View style={{width:10}}></View>
      <TextInput placeholder='Type a message...' style={{width: '100%', height:"100%"}}/> 
      </View>
      <View style={{width:50, height:50, paddingLeft:10, elevation:7, paddingTop:10, backgroundColor:'green', position:'absolute', borderRadius:50,top:670, left: 306}}>
      <Feather name="send" size={24} color="#fff" />
      </View>
    </View>
    
    
  )
}


function ChatComponent(){

    let messages = [
        {
            sender:"jairus",
            receiver:"tom",
            message:"This is a message sent! gd",
            time:"11.00pm Today"
        },
        {
            sender:"tom",
            receiver:"jairus",
            message:"This is a fd sedf dfidifd   uig wew weew ewwe wew wew driur wrohwhrwnwr rwr dfihis sfisnt!",
            time:"11.00pm Today"
        },
        {
            sender:"tom",
            receiver:"jairus",
            message:"This is a mesuioyuyuyiugufyuiohuihu uiyui uiiug iuhui fyufkjtuygyugu kgyu isfgsuidsuid suidsudisuigd uisdusidh sage sent!",
            time:"11.00pm Today"
        },
        {
            sender:"jairus",
            receiver:"jairus",
            message:"This is a message  uioyuyui jihuiuisent!",
            time:"11.00pm Today"
        },
        {
            sender:"tom",
            receiver:"jairus",
            message:"This is a message sent! ioyioyhjhvhjkjkb uktfyu ut8ut8 iuguig",
            time:"11.00pm Today"
        },
        {
            sender:"tom",
            receiver:"jairus",
            message:"This is a message sent!",
            time:"11.00pm Today"
        },
        {
            sender:"jairus",
            receiver:"jairus",
            message:"This is a message sent!",
            time:"11.00pm Today"
        },
        {
            sender:"tom",
            receiver:"jairus",
            message:"This is a message sent!",
            time:"11.00pm Today"
        },
        {
            sender:"jairus",
            receiver:"jairus",
            message:"This is a message sent!",
            time:"11.00pm Today"
        },
    ];

    // end of test data

    let rendered = messages.map((message)=>{

        let stringsize = message.message.length;

    

        if(message.sender !== 'jairus'){

            return(
                <View style={{  paddingTop:13, paddingLeft:10, width: 200, marginLeft:12, backgroundColor:"green", marginTop:10, borderTopLeftRadius: 20,borderTopRightRadius:20, borderBottomEndRadius:20,  }}>
                     <Text style={{color:'#fff'}}>{message.message} </Text>
                </View>
               
            );

        }else if(message.sender == 'jairus'){
            return(
                <View style={{ height: 60, width: 200, paddingLeft:15, paddingTop:10, marginLeft:155, backgroundColor:"#D7DCD3", marginTop:20, borderTopLeftRadius: 20,borderTopRightRadius:20,  borderBottomStartRadius:20 }}>
                <Text style={{}}>Right alligned</Text>
           </View>
            );
           
            
        }
        
     
    });

    return(

    <ScrollView style={{width: windowWidth, height:windowHeight*0.75, position:"absolute", top: 100, }}>
   
        {rendered}
    </ScrollView>
    );



}