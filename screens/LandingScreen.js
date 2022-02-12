import { View, Text,StyleSheet ,Dimensions,Image} from 'react-native'
import React from 'react'
const windowWidth = Dimensions.get('window').width;
export default function LandingScreen() {

  return (
    <View style={styles.container}>
      
      <Image source={require('../assets/splash-image.png') } style={styles.tinyLogo}/>
      <Text style={{fontSize: 25, fontWeight:"bold"}}>Find treatment in 2 minutes</Text>
      <View style={{width: 250}}>
      <Text style={{fontSize:18, textAlign:'center', marginBottom:20}}>You can get suggestions from verified consultants for your instant treatment</Text>
      </View>

      <View style={styles.button}> 
      <Text style={{position:'absolute', left:130, marginTop:15,fontSize:20, fontWeight:'bold', color:"#fff" }}>Sign Up</Text>
      
      </View>
      <View style={styles.button}> 
      <Text style={{position:'absolute', left:130, marginTop:15, fontSize:20, fontWeight:'bold', color:"#fff" }}>Sign In</Text>
      
      </View>
     
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      position:"relative"
    },
    tinyLogo:{
        height:300,
        width:windowWidth,
       
    },
    button:{
        width: 300,
        height: 50,
        backgroundColor:"green",
        borderBottomEndRadius: 15,
        borderBottomLeftRadius:13,
        borderTopEndRadius:13,
        borderTopLeftRadius:13,
        marginTop:10
    }
  });
  