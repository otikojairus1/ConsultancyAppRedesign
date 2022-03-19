import { View, StyleSheet, TextInput, Dimensions,Text,Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import {React,useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import { BASE_URL } from '../API_KEY';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function DoctorSignup({navigation}) {
  const [name, setName] = useState();
  const [dob, setDOB] = useState();
  const [Password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

const onSubmit = () => {
  setLoading(true);

axios.post(BASE_URL+'/register', {
  'name':name,
  "email":email,
  "account":"doctor",
  "password":Password,
}).then((res)=>{
  console.log(res.data)
  

  setTimeout(function(){

    // check if error
    if(res.data.error != null){
      setLoading(false);
      setError(true);

    }else{
      setLoading(false);
      navigation.navigate('DoctorLogin');

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
  return (
    <SafeAreaView style={{flex:1, justifyContent:'center', backgroundColor:"#fff", alignItems: 'center'}}>
    <Image source={require('../assets/loading1.gif')} style={{width:70, height:100}} />
    <Text style={{fontSize: 20, textAlign:"center", fontWeight:'bold', color:'green'}}>Kindly wait while we work on your account creation!</Text>
    </SafeAreaView>
  );
}else if(error){
  return(
      
  <SafeAreaView style={{flex:1, justifyContent:'center', backgroundColor:"#fff", alignItems: 'center'}}>
  <Image source={require('../assets/error-green.gif')} style={{width:200, height:200}} />
  <Text style={{fontSize: 25, fontWeight:'bold', color:'green'}}>An error occured</Text>
  <View style={{width:330, paddingLeft:17, paddingRight:17}}>
  <Text style={{fontSize: 20, textAlign:"center", color:'green'}}>Double check your details before resending, You should also use an email that is unique and therefore not used with a different account</Text>

    
    <TouchableOpacity onPress={()=>{setError(false)}} style={{height:50, justifyContent:'center', alignItems:"center", borderRadius:10, width:140, backgroundColor:"green", marginLeft:100}}>
    <Text style={{fontSize:20, color:'#fff'}}>Retry</Text>

    </TouchableOpacity>
  
  </View>

  </SafeAreaView>
  );

}

else{



  return (
      <>
     
          <View style={styles.wrapper}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
            </TouchableOpacity>
          </View>
   
    <View style={{height: 200,marginLeft:17, width: windowWidth, position:"absolute", top: 200}}>
    <Text style={{fontSize: 35, fontWeight:'bold', color:'green'}}>Hello! Sign up as</Text>
    <Text style={{fontSize: 35, fontWeight:'bold', color:'green'}}> Patient to get </Text>
    <Text style={{fontSize: 35, fontWeight:'bold', color:'green'}}> started </Text>
    <View style={{height: 20}}></View>
    <View style={{backgroundColor: '#fff', elevation:7, height:65, justifyContent:'center',  
    borderBottomEndRadius: 20,
    borderBottomLeftRadius:20,
    borderTopEndRadius:20,
    borderTopLeftRadius:20, marginBottom:10,
    width:windowWidth*0.9, paddingBottom:2, paddingTop:2, paddingLeft:9}}>
    <TextInput value={email} onChangeText={(email)=>setEmail(email)} placeholder='Email Address' /> 
    </View>

    {/* name */}
    <View style={{backgroundColor: '#fff', elevation:7, height:65, justifyContent:'center',  
    borderBottomEndRadius: 20,
    borderBottomLeftRadius:20,
    borderTopEndRadius:20, marginBottom:10,
    borderTopLeftRadius:20,
    width:windowWidth*0.9, paddingBottom:2, paddingTop:2, paddingLeft:9}}>
    <TextInput placeholder='Name' value={name} onChangeText={(name)=>setName(name)} /> 
    </View>

    {/* date of birth */}

    <View style={{backgroundColor: '#fff', elevation:7, height:65, justifyContent:'center',  
    borderBottomEndRadius: 20,
    borderBottomLeftRadius:20,
    borderTopEndRadius:20,
    borderTopLeftRadius:20,
    width:windowWidth*0.9, paddingBottom:2, paddingTop:2, paddingLeft:9}}>
    <TextInput placeholder='Date of Birth' value={dob} onChangeText={(dob)=>setDOB(dob)} /> 
    </View>

    <View style={{backgroundColor: '#fff', elevation:7, marginTop:10, height:65, justifyContent:'center',  
    borderBottomEndRadius: 20,
    borderBottomLeftRadius:20,
    borderTopEndRadius:20,
    borderTopLeftRadius:20,
    width:windowWidth*0.9, paddingBottom:2, paddingTop:2, paddingLeft:9}}>
    <TextInput secureTextEntry={true} value={Password} onChangeText={(password)=>setPassword(password)} placeholder='Password' /> 
    </View>

    <View style={{marginLeft: 220, marginTop:10}}><Text style={{fontWeight:'bold', fontStyle:'italic'}}>Forgot Password?</Text></View>

    {/* button */}
    <TouchableOpacity onPress={onSubmit} style={styles.button}> 
      <Text style={{position:'absolute', left:100, marginTop:15, fontSize:20, fontWeight:'bold', color:"#fff" }}>Create an account</Text>
      
      </TouchableOpacity>
      <View style={{marginLeft: 10, marginTop:10}}><Text style={{fontWeight:'bold', fontStyle:'italic'}}>Dont have an account? Sign up</Text></View>

    </View>
  
    </>
  )}
}


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
    }
  });
  