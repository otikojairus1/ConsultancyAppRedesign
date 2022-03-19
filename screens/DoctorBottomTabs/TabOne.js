import { View, Text,Image ,ScrollView, SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import { BASE_URL } from '../../API_KEY'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function TabOne({navigation, name, DataArray, account}) {

    
    
    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);

    React.useState(()=>{
        setData(DataArray);
        setLoading(false);
    })

let render;

if(account == 'doctor' ){

 render =  <TouchableOpacity onPress={()=>{navigation.navigate('AddSuggestion',{"name":name})}} style={{width: 150, height: 50, backgroundColor: 'green', borderTopLeftRadius: 10,borderTopRightRadius:10, borderBottomEndRadius:10, borderBottomStartRadius:10, justifyContent:'center', textAlign:'center', alignItems: 'center'}}>
    <Text style={{fontSize:15, color:"#fff"}}>Add New Suggestion</Text>
    </TouchableOpacity>
}else{
    render = <Text>{""}</Text>

}


 


if(loading){
    return(
        <View style={{flex:1, justifyContent:'center', backgroundColor:"#fff", alignItems: 'center'}}>
        <Image source={require('../../assets/loading1.gif')} style={{width:70, height:100}} />
        <Text style={{fontSize: 20, textAlign:"center", fontWeight:'bold', color:'green'}}>Kindly wait while we optimize your experience!</Text>
        </View>
    );
}else{



  return (
    <View style={{width: windowWidth,marginLeft:8, marginRight:20}}>
      <View style={{width: windowWidth, height: 50, position:'absolute', top: 60, display:'flex', flexDirection:'row',justifyContent:'space-between' }}>
          <View style={{width: 50, height: 50}}>
              <Image source={require('../../assets/doctors.png')} style={{ height:50, width:50, marginLeft:3, borderTopLeftRadius:5, borderTopRightRadius:5}}/>

          </View>
          <View style={{width: 50, height: 50, justifyContent:'center', alignItems:'center'}}>
          <AntDesign name="bells" size={24} color="black" />
        </View>
      </View>
     <View style={{width: windowWidth, height: 50, position:'absolute', top: 120, paddingLeft:5}}>
         <Text style={{fontSize:20, fontWeight:'bold'}}>Good Morning</Text>
     </View>
     <View style={{width: windowWidth, height: 50, position:'absolute', top: 150, paddingLeft:5}}>
         <Text style={{fontSize: 16}}>{name}</Text>
     </View>

     {/* buttons */}

     <View style={{width: windowWidth, flexDirection:'row', paddingLeft:10, paddingRight:15, height: 100, justifyContent:'space-between', alignItems:'center', position:'absolute', top:170}}>
  {render}

        <View style={{width: 150, height: 50, backgroundColor: '#BAB8B8', borderTopLeftRadius: 10,borderTopRightRadius:10, borderBottomEndRadius:10, borderBottomStartRadius:10, justifyContent:'center', textAlign:'center', alignItems: 'center'}}>
            <Text style={{fontSize:15, color:'black'}}>Suggestion</Text>
        </View>
     </View>

     {/* end of buttons */}
     {/* start of horinzontal rule */}

     <View
  style={{
      width:windowWidth*0.9, 
      position:'absolute', 
      top: 260,
    borderBottomColor: '#D7DCD3',
    borderBottomWidth: 1,
  }}
/>

     {/* end of horizontal rule */}

     <View style={{marginBottom:10, position:'absolute', top: 270 }}>
     <Text>Suggestions</Text>
     </View>
   
     

     {/* start of suggestion cards */}

     <View style={{ height:windowHeight ,marginTop: 300}}>
         <ScrollView>
         {data.map((card, index)=>{
return(
<View key={index} style={{ elevation:6, width: 340,height: 320, marginTop:10, backgroundColor:"#fff",  borderTopLeftRadius: 10,borderTopRightRadius:10, borderBottomEndRadius:10, borderBottomStartRadius:10, }}>
<View style={{ width: 330, display:'flex', justifyContent:'space-between', flexDirection:"row", height:50, justifyContent:'center', textAlign: 'center', marginLeft:4, position:'absolute', top:10, }}>
    
        <Image source={require('../../assets/doctors.png')} style={{width: 50, height: 50}}/>

    
    <View style={{  flex:2, height:50,  flexDirection:"column"  }}>
        <View><Text style={{fontSize: 15, fontWeight:"bold"}}>Dr. {card.name}</Text></View>
        <View><Text>Phd in medical science, Oxford University</Text></View>
    </View>
    <View style={{ alignItems:"center", justifyContent:'center', flex:1,height:50, backgroundColor:'#D4F2BF', borderTopLeftRadius: 10,borderTopRightRadius:10, borderBottomEndRadius:10, borderBottomStartRadius:10, }}>
    <Text style={{color:"green"}}>Certified</Text>
    </View>
</View>
<View style={{position:"absolute", top:80, marginLeft:15, marginRight:5,}}>
    <Text> <Text style={{fontWeight:'bold'}}>Where's the pain? </Text>  {card.One}</Text>
    <Text> <Text style={{fontWeight:'bold'}}>Is it bilateral?  </Text>  {card.Two}</Text>
    <Text> <Text style={{fontWeight:'bold'}}>Where's the suvereinity and its duration? </Text>  {card.Three}</Text>
    <Text> <Text style={{fontWeight:'bold'}}>Whats the Quality of Pain? </Text>  {card.Four}</Text>
    <Text> <Text style={{fontWeight:'bold'}}>Related symptoms </Text>  {card.Five}</Text>
</View>

<View style={{width:310, marginLeft:10, height: 70, display:"flex", flexDirection:'row', backgroundColor:"red", position:'absolute', top:180}}> 
    <View style={{ backgroundColor:"#fff" ,flex:1}}>
        <Text style={{ fontSize: 16, fontWeight:'bold'}}>Diet</Text>
        <View style={{height: 90, width: 90, textAlign:"center", justifyContent:"center", backgroundColor:"green", borderTopLeftRadius: 10,borderTopRightRadius:10, borderBottomEndRadius:10, borderBottomStartRadius:10, }}>
            <Image source={require('../../assets/doctors.png')} style={{height: 30, position:"absolute", top:5,left: 20, width:30}}/>
            <Text style={{ position:"absolute", top:40, color:"#fff"}}>1 Glass</Text>
            <Text style={{position:"absolute", top:50, color:"#fff"}}>Lemon water</Text>
        </View>

    </View>
    <View style={{ backgroundColor:"#fff" ,flex:1}}>
        <Text style={{ fontSize: 16, fontWeight:'bold', color:"black"}}>Medication</Text>
        <View style={{height: 90, width: 90, textAlign:"center", justifyContent:"center", backgroundColor:"green", borderTopLeftRadius: 10,borderTopRightRadius:10, borderBottomEndRadius:10, borderBottomStartRadius:10, }}>
            <Image source={require('../../assets/mango.jpg')} style={{height: 30, position:"absolute", top:5,left: 20, width:30}}/>
            <Text style={{ position:"absolute", top:40, color:"#fff"}}>1 Glass</Text>
            <Text style={{position:"absolute", top:50, color:"#fff"}}>Lemon water</Text>
        </View>

    </View>
    <View style={{ backgroundColor:"#fff" ,flex:1}}>
        <Text style={{ fontSize: 16, fontWeight:'bold'}}>Avoid</Text>
        <View style={{height: 90, width: 90, textAlign:"center", justifyContent:"center", backgroundColor:"green", borderTopLeftRadius: 10,borderTopRightRadius:10, borderBottomEndRadius:10, borderBottomStartRadius:10, }}>
            <Image source={require('../../assets/doctors.png')} style={{height: 30, position:"absolute", top:5,left: 20, width:30}}/>
            <Text style={{ position:"absolute", top:40, color:"#fff"}}>1 Glass</Text>
            <Text style={{position:"absolute", top:50, color:"#fff"}}>Lemon water</Text>
        </View>

    </View>
</View>


</View>);


         })}



</ScrollView>
        
        </View>
       

    


    </View>
  )}
}