import { View, StyleSheet, TextInput, Dimensions,Text , SafeAreaView,Image, TouchableOpacity} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import {React, useState} from 'react'
import axios from 'axios';
import {BASE_URL} from '../API_KEY'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function Login({navigation}) {
  
const [email, setEmail] = useState();
const [error, setError] = useState(false);
const [password, setPassword] = useState();
const [loading, setLoading] = useState(false);

const onSubmit = () => {
  setLoading(true);

axios.post(BASE_URL+'/login', {
  "email":email,
  "password":password,
}).then((res)=>{
  console.log(res.data)
  

  setTimeout(function(){

    // check if error
    if(res.data.error != null){
      setLoading(false);
      setError(true);

    }else{
      setLoading(false);
      console.log(res.data.userDetails.name);
      navigation.navigate('Dashboard',  {'name':res.data.userDetails.name,});

    }
    

  }, 2000); 
})
.catch((err)=>{
  setError(true);
  console.log(err)})


  // console.log({
  //   'name':name,
  //   "email":email,
  //   "dob":dob,
  //   "Password":Password,
    

  // });
}

if(loading){
  return(
    <SafeAreaView style={{flex:1, justifyContent:'center', backgroundColor:"#fff", alignItems: 'center'}}>
    <Image source={require('../assets/loading1.gif')} style={{width:70, height:100}} />
    <Text style={{fontSize: 20, textAlign:"center", fontWeight:'bold', color:'green'}}>Authenticating using provided login credentials!</Text>
    </SafeAreaView>
  );
}else if(error){
  return(
          
  <SafeAreaView style={{flex:1, justifyContent:'center', backgroundColor:"#fff", alignItems: 'center'}}>
  <Image source={require('../assets/error-green.gif')} style={{width:200, height:200}} />
  <Text style={{fontSize: 25, fontWeight:'bold', color:'green'}}>An error occured</Text>
  <View style={{width:330, paddingLeft:17, paddingRight:17}}>
  <Text style={{fontSize: 20, textAlign:"center", color:'green'}}>You provided wrong credentials! Double check your details before resending</Text>

    
    <TouchableOpacity onPress={()=>{setError(false)}} style={{height:50, justifyContent:'center', alignItems:"center", borderRadius:10, width:140, backgroundColor:"green", marginLeft:100}}>
    <Text style={{fontSize:20, color:'#fff'}}>Retry</Text>

    </TouchableOpacity>
  
  </View>

  </SafeAreaView>
  );
}else{
  return (
      <>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <View style={styles.wrapper}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
        </View>
    </TouchableOpacity>
    <View style={{height: 200,marginLeft:17, width: windowWidth, position:"absolute", top: 150}}>
    <Text style={{fontSize: 35, fontWeight:'bold', color:'green'}}>Hello Again!</Text>
    <Text style={{fontSize: 35, fontWeight:'bold', color:'green'}}>Welcome </Text>
    <Text style={{fontSize: 35, fontWeight:'bold', color:'green'}}>Back </Text>
    <View style={{height: 20}}></View>
    <View style={{backgroundColor: '#fff', elevation:7, height:65, justifyContent:'center',  
    borderBottomEndRadius: 20,
    borderBottomLeftRadius:20,
    borderTopEndRadius:20,
    borderTopLeftRadius:20,
    width:windowWidth*0.9, paddingBottom:2, paddingTop:2, paddingLeft:9}}>
    <TextInput placeholder='Email Address' value={email} onChangeText={(email)=>setEmail(email)} /> 
    </View>

    <View style={{backgroundColor: '#fff', elevation:7, marginTop:10, height:65, justifyContent:'center',  
    borderBottomEndRadius: 20,
    borderBottomLeftRadius:20,
    borderTopEndRadius:20,
    borderTopLeftRadius:20,
    width:windowWidth*0.9, paddingBottom:2, paddingTop:2, paddingLeft:9}}>
    <TextInput secureTextEntry={true}  value={password} onChangeText={(password)=>setPassword(password)} placeholder='Password' /> 
    </View>

    <View style={{marginLeft: 220, marginTop:10}}><Text style={{fontWeight:'bold', fontStyle:'italic'}}>Forgot Password?</Text></View>

    {/* button */}
    <TouchableOpacity onPress={onSubmit}>
    <View style={styles.button}> 
      <Text style={{position:'absolute', left:130, marginTop:15, fontSize:20, fontWeight:'bold', color:"#fff" }}>Sign In</Text>
      
      </View>
      </TouchableOpacity>
      <View style={{marginLeft: 10, marginTop:10}}><Text style={{fontWeight:'bold', fontStyle:'italic'}}>Dont have an account? Sign up</Text></View>

    </View>
  
    </>
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
  