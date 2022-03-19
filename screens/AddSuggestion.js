import { View, Text,Dimensions, TouchableOpacity,StyleSheet,SafeAreaView,Image, TextInput } from 'react-native'
import {React, useState} from 'react'
import axios from 'axios';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {BASE_URL} from '../API_KEY'

export default function AddSuggestion({navigation, route}) {
  const { name } = route.params;
      
const [pain, setPain] = useState();
const [pain2, set2pain] = useState();
const [bilateral, setbilateral] = useState();
const [symptoms, setsymptoms] = useState();
const [duration, setduration] = useState();
const [loading, setLoading] = useState(false);

const onSubmit = ()=>{

  setLoading(true);

  axios.post(BASE_URL+'/add/suggestion', {
    "One":pain,
    "Two":pain2,
    "name":name,
    "Three":bilateral,
    'Four':symptoms,
    "Five":duration
  }).then((res)=>{
    console.log(res.data)
    
  
    setTimeout(function(){
  
      // check if error
      if(res.data.error != null){
        setLoading(false);
       //setError(true);
  
      }else{
        setLoading(false);
        navigation.goBack();
  
      }
      
  
    }, 1000); 
  })
  .catch((err)=>{
   // setError(true);
    console.log(err)})



}

if(loading){
    return(
        <SafeAreaView style={{flex:1, justifyContent:'center', backgroundColor:"#fff", alignItems: 'center'}}>
        <Image source={require('../assets/loading1.gif')} style={{width:70, height:100}} />
        <Text style={{fontSize: 20, textAlign:"center", fontWeight:'bold', color:'green'}}>Publishing the information! Sit tight as we work on publishing your content</Text>
        </SafeAreaView>
    );
}else{

  return (
    
    <View style={{flex:1, justifyContent:'center', backgroundColor:"#fff", alignItems: 'center'}}>
      <Text style={{fontWeight:'bold', fontSize:25, color:'green'}}>Add a New Suggestion</Text>
      <View style={{height:60}}></View>
      <Text>Wheres the pain?</Text>
      <View style={{backgroundColor: '#fff', elevation:7, height:65, justifyContent:'center',  
    borderBottomEndRadius: 20,
    borderBottomLeftRadius:20,
    borderTopEndRadius:20,
    borderTopLeftRadius:20,
    width:windowWidth*0.9, paddingBottom:2, paddingTop:2, paddingLeft:9}}>
      
    <TextInput placeholder='' value={pain} onChangeText={(pain)=>setPain(pain)} /> 
    </View>
    <Text>is it bilateral or unilateral?</Text>

    <View style={{backgroundColor: '#fff', elevation:7, marginTop:10, height:65, justifyContent:'center',  
    borderBottomEndRadius: 20,
    borderBottomLeftRadius:20,
    borderTopEndRadius:20,
    borderTopLeftRadius:20,
    width:windowWidth*0.9, paddingBottom:2, paddingTop:2, paddingLeft:9}}>
    <TextInput value={bilateral} onChangeText={(bilateral)=>setbilateral(bilateral)} placeholder='' /> 
    </View>
    <Text>Whats the severinity and duration?</Text>
    <View style={{backgroundColor: '#fff', elevation:7, marginTop:10, height:65, justifyContent:'center',  
    borderBottomEndRadius: 20,
    borderBottomLeftRadius:20,
    borderTopEndRadius:20,
    borderTopLeftRadius:20,
    width:windowWidth*0.9, paddingBottom:2, paddingTop:2, paddingLeft:9}}>
    <TextInput value={duration} onChangeText={(duration)=>setduration(duration)} placeholder='' /> 
    </View>

    <Text>Whats the quality of pain?</Text>
    <View style={{backgroundColor: '#fff', elevation:7, marginTop:10, height:65, justifyContent:'center',  
    borderBottomEndRadius: 20,
    borderBottomLeftRadius:20,
    borderTopEndRadius:20,
    borderTopLeftRadius:20,
    width:windowWidth*0.9, paddingBottom:2, paddingTop:2, paddingLeft:9}}>
    <TextInput   value={pain2} onChangeText={(pain2)=>set2pain(pain2)} placeholder='' /> 
    </View>
    <Text>are there other symptoms?</Text>

    <View style={{backgroundColor: '#fff', elevation:7, marginTop:10, height:65, justifyContent:'center',  
    borderBottomEndRadius: 20,
    borderBottomLeftRadius:20,
    borderTopEndRadius:20,
    borderTopLeftRadius:20,
    width:windowWidth*0.9, paddingBottom:2, paddingTop:2, paddingLeft:9}}>
    <TextInput  value={symptoms} onChangeText={(symptoms)=>setsymptoms(symptoms)} placeholder='' /> 
    </View>


   

    {/* button */}
    <TouchableOpacity onPress={onSubmit}>
    <View style={styles.button}> 
      <Text style={{position:'absolute', left:130, marginTop:15, fontSize:20, fontWeight:'bold', color:"#fff" }}>Next</Text>
      
      </View>
      </TouchableOpacity>
    

    </View>
   
    
  )
}}


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
    },
    tes:{
      width:20,
    }
  });
  