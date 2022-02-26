import { View, Text,StyleSheet, Dimensions ,TextInput,ScrollView,Image} from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';




const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Dashboard() {
  return (
    <View >
      <View style={{width: windowWidth, alignItems:'center',height: 50, display:"flex", flexDirection:'row', justifyContent:'space-between', position:'absolute', top:45, backgroundColor:'#fff'}}>
          
              <Image source={require('../assets/splash-image.png') } style={styles.tinyLogo}/>
            
         <View style={styles.wrapper}>
            <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
        </View>
    </View>
    <Text style={{position:'absolute', top: 150, fontSize:30,marginLeft:10, fontWeight:'bold' }}>Good morning</Text>
    <Text style={{position:'absolute', top: 180, fontSize:30,marginLeft:10 }}>James</Text>

        <View style={{backgroundColor: '#fff', elevation:7, height:65,   top:230, marginLeft:10,
        borderBottomEndRadius: 20,
        borderBottomLeftRadius:20, backgroundColor:"#D4D0CF",
        borderTopEndRadius:20, marginBottom:10,
        borderTopLeftRadius:20,
        width:windowWidth*0.9, paddingBottom:2, paddingTop:2, paddingLeft:9}}>
                <View style={{display:"flex", flexDirection:'row', justifyContent:'flex-start', position:'absolute', top:20, marginLeft:10, justifyContent:'center'}}>
                <Octicons name="search" size={24} color="black" />
            <TextInput placeholder='Search' /> 
            
            </View>
        </View>
        <Text style={{position:'absolute', top: 300, fontSize:20, fontWeight:'bold', marginLeft:10 ,marginRight:10}}>Most Popular</Text>
                <View style={{width: windowWidth, marginTop:10, height: 150, position:'absolute', top: 320, backgroundColor: '#fff', marginLeft:10}}>
        <ScrollView horizontal={true}>
                
                        <View style={{width:150, height:'100%', backgroundColor: 'green',   marginRight:3,        borderBottomEndRadius: 20,
                            borderBottomLeftRadius:20,
                            borderTopEndRadius:20, marginBottom:10,
                            borderTopLeftRadius:20, }}>
                                <View style={{width:50, height: 50, borderBottomLeftRadius:20,
                                borderTopEndRadius:20, marginBottom:10,
                                borderTopLeftRadius:20, backgroundColor:"#fff", position:'absolute',top: 20, left: 20 }}>
                                    <View style={{marginLeft: 12, marginTop: 12}}><FontAwesome5 name="smile-beam" size={24} color="#F9B707" /></View> 
                                </View>
                                <Text style={{position:'absolute', top: 75, color:"#fff", fontSize:20,marginLeft:10 }}>Headache</Text>
                                <Text style={{position:'absolute', top: 95, color:"#fff", fontSize:18,marginLeft:10 }}>Suggestions</Text>
                        </View>
                        {/* tab 2 */}
                        
                        <View style={{width:150, height:'100%', backgroundColor: '#DC0202',  marginRight:3,     borderBottomEndRadius: 20,
                            borderBottomLeftRadius:20,
                            borderTopEndRadius:20, marginBottom:10,
                            borderTopLeftRadius:20, }}>
                                <View style={{width:50, height: 50, borderBottomLeftRadius:20,
                                borderTopEndRadius:20, marginBottom:10,
                                borderTopLeftRadius:20, backgroundColor:"#fff", position:'absolute',top: 20, left: 20 }}>
                                    <View style={{marginLeft: 12, marginTop: 12}}><AntDesign name="heart" size={24} color="red" /></View> 
                                </View>
                                <Text style={{position:'absolute', top: 75, color:"#fff", fontSize:20,marginLeft:10 }}>Heart Pain</Text>
                                <Text style={{position:'absolute', top: 95, color:"#fff", fontSize:18,marginLeft:10 }}>Suggestions</Text>
                        </View>
                        {/* tab 3 */}
                        
                        <View style={{width:150, height:'100%', backgroundColor: '#F9B707',       borderBottomEndRadius: 20,
                            borderBottomLeftRadius:20,
                            borderTopEndRadius:20, marginBottom:10,
                            borderTopLeftRadius:20, }}>
                                <View style={{width:50, height: 50, borderBottomLeftRadius:20,
                                borderTopEndRadius:20, marginBottom:10,
                                borderTopLeftRadius:20, backgroundColor:"#fff", position:'absolute',top: 20, left: 20 }}>
                                    <View style={{marginLeft: 12, marginTop: 12}}><FontAwesome5 name="tooth" size={24} color="#8C8383" /></View> 
                                </View>
                                <Text style={{position:'absolute', top: 75, color:"#fff", fontSize:20,marginLeft:10 }}>Teath</Text>
                                <Text style={{position:'absolute', top: 95, color:"#fff", fontSize:18,marginLeft:10 }}>Suggestions</Text>
                        </View>
                        </ScrollView>

                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Your Latest Suggestions</Text>
                        <View style={{width: windowWidth*0.95, backgroundColor: '#8C8383', position:'absolute', top:160, height: 95}}>
                            <View style={{width: 70, height:70, marginLeft:10, marginTop: 16,  borderBottomLeftRadius:20,
                            borderTopEndRadius:20, marginBottom:10,
                            borderTopLeftRadius:20, borderBottomEndRadius:20, paddingLeft:15, paddingTop:15, backgroundColor: "#fff"}}><FontAwesome5 name="bone" size={30} color="black" /></View>
                            <View>
                            <Text style={{position:'absolute', top: -80, left:100, color:"black", fontSize:18,marginLeft:10 }}>Suggestions</Text>
                            <Text style={{position:'absolute', top: -60, left:100, color:"black", fontSize:18,marginLeft:10 }}>Consultant Dr. Walter</Text>
                            </View>
                        </View>

                        {/* suggestion 2 */}
                        <View style={{width: windowWidth*0.95, backgroundColor: '#8C8383', position:'absolute', top:260, height: 95}}>
                            <View style={{width: 70, height:70, marginLeft:10, marginTop: 16,  borderBottomLeftRadius:20,
                            borderTopEndRadius:20, marginBottom:10,
                            borderTopLeftRadius:20, borderBottomEndRadius:20, paddingLeft:15, paddingTop:15, backgroundColor: "#fff"}}><AntDesign name="heart" size={24} color="red" /></View>
                            <View>
                            <Text style={{position:'absolute', top: -80, left:100, color:"black", fontSize:18,marginLeft:10 }}>Blood Pressure</Text>
                            <Text style={{position:'absolute', top: -60, left:100, color:"black", fontSize:18,marginLeft:10 }}>Consultant Dr. Walter</Text>
                            </View>
                        </View>
                        
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
    height: 50,
    width:50,
    marginLeft:10
},
wrapper:{
    height: 36,
    width: 36,
    marginLeft:10,
    marginRight:10,
    paddingLeft:5,
    paddingTop:5,
    // position:"absolute",
    // top:50,
    backgroundColor:"#CAC4C3",
    borderBottomEndRadius: 8,
    borderBottomLeftRadius:8,
    borderTopEndRadius:8,
    borderTopLeftRadius:8,
    
},

});