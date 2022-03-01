import { View, Text, Dimensions ,StyleSheet,Image,TextInput,ScrollView} from 'react-native'
import React from 'react'
import { AntDesign,MaterialIcons,FontAwesome } from '@expo/vector-icons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Shop() {
  return (
    <View style={{height: windowHeight, width:windowWidth, marginTop: 40,}}>
        {/* start of appbar */}
      <View style={{height: 50, display:'flex',flexDirection:'row'}}>
          <View style={{height: 50,flex:1 ,alignItems:'flex-start', justifyContent:'flex-end'}}>
          <View style={styles.wrapper}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
        </View>

          </View>
          <View style={{height: 50, flex:1 , alignItems:'center', justifyContent:'center'}}>
              <Text style={{fontWeight:'bold', fontSize:20}}>Shop</Text>

          </View>
          <View style={{height: 50, flex:1 ,alignItems:'flex-end', marginRight:15, marginTop:1, justifyContent:'center'}}>
         
          <AntDesign name="shoppingcart" size={26} color="black" />
        
          </View>

      </View>
      {/* end of appbar */}

          {/* search */}

          <View style={{ flexDirection:'row', paddingLeft:15, alignItems:'center', marginTop:25,marginLeft:15,  height:50, width: 324, backgroundColor:'#D7DCD3', borderTopLeftRadius: 10,borderTopRightRadius:10, borderBottomEndRadius:10, borderBottomStartRadius:10,}}>
      <FontAwesome name="search" size={14} color="black" />
      <View style={{width:10}}></View>
      <TextInput placeholder='search' style={{width: '100%', height:"100%"}}/> 
      </View>

      {/* end of search */}
      {/* listing */}

      <View style={{height: 20, display:'flex', flexDirection:'row', justifyContent:'space-between', marginLeft:20, marginRight:20, marginTop:20}}>
          <Text style={{fontSize: 16, fontWeight:'bold'}}>Heart</Text>
          <Text style={{fontSize: 16, fontWeight:'bold',}}>See all</Text>
        </View>

      {/* end of listing */}

      {/* start of category listing */}

      
      <ScrollView>

        <View style={{height:200,paddingLeft:7, flexDirection:"row", paddingRight:7, marginBottom:5}}>
            <View style={{width: "50%", marginRight:4, elevation:10, borderRadius:20,height:200, backgroundColor:'#fff', paddingLeft:10, paddingTop:20, paddingRight:10,paddingBottom:20}}>
                <View style={{height:"50%", width:"50%", backgroundColor:"#fff", marginLeft:40}}>
                <Image source={require('../../assets/bottle.jpg')} style={{ height:"100%", width:"100%", borderTopLeftRadius:5, borderTopRightRadius:5}}/>

                </View>
                <View style={{height:"16%",marginTop:5 ,width:"100%", alignItems:'center', justifyContent:"center", backgroundColor:"#fff"}}>
                    <Text style={{ fontSize: 16, fontWeight:'bold'}}>Vitamin D plus</Text>
                </View>
                <View style={{display:"flex", marginTop:17, marginRight:10, marginLeft:10, flexDirection:'row', justifyContent:'space-between'}}>

                    <View style={{flex:1}}>
                        <Text style={{ fontSize: 16, fontWeight:'bold'}}>$30</Text>

                    </View>

                    <View style={{height:30, width:30, borderRadius:50, paddingLeft:7, elevation:7, paddingTop:5, backgroundColor: 'green'}}>
                    <AntDesign name="arrowright" size={17} color="black" />
                        
                    </View>
                    
                </View>

            </View>
            {/* card 2 */}

            <View style={{width: "50%", elevation:10, borderRadius:20,height:200, backgroundColor:'#fff', paddingLeft:10, paddingTop:20, paddingRight:10,paddingBottom:20}}>
                <View style={{height:"50%", width:"50%", backgroundColor:"#fff", marginLeft:40}}>
                <Image source={require('../../assets/bottle.jpg')} style={{ height:"100%", width:"100%", borderTopLeftRadius:5, borderTopRightRadius:5}}/>

                </View>
                <View style={{height:"16%",marginTop:5 ,width:"100%", alignItems:'center', justifyContent:"center", backgroundColor:"#fff"}}>
                    <Text style={{ fontSize: 16, fontWeight:'bold'}}>Vitamin D plus</Text>
                </View>
                <View style={{display:"flex", marginTop:17, marginRight:10, marginLeft:10, flexDirection:'row', justifyContent:'space-between'}}>

                    <View style={{flex:1}}>
                        <Text style={{ fontSize: 16, fontWeight:'bold'}}>$30</Text>

                    </View>

                    <View style={{height:30, width:30, borderRadius:50, paddingLeft:7, elevation:7, paddingTop:5, backgroundColor: 'green'}}>
                    <AntDesign name="arrowright" size={17} color="black" />
                        
                    </View>
                    
                </View>

            </View>

        </View>

      {/* end of category listing */}

      


       {/* start of category listing */}

       <View style={{height:200,paddingLeft:7, flexDirection:"row", paddingRight:7, marginBottom:5}}>
            <View style={{width: "50%", marginRight:4, elevation:10, borderRadius:20,height:200, backgroundColor:'#fff', paddingLeft:10, paddingTop:20, paddingRight:10,paddingBottom:20}}>
                <View style={{height:"50%", width:"50%", backgroundColor:"#fff", marginLeft:40}}>
                <Image source={require('../../assets/bottle.jpg')} style={{ height:"100%", width:"100%", borderTopLeftRadius:5, borderTopRightRadius:5}}/>

                </View>
                <View style={{height:"16%",marginTop:5 ,width:"100%", alignItems:'center', justifyContent:"center", backgroundColor:"#fff"}}>
                    <Text style={{ fontSize: 16, fontWeight:'bold'}}>Vitamin D plus</Text>
                </View>
                <View style={{display:"flex", marginTop:17, marginRight:10, marginLeft:10, flexDirection:'row', justifyContent:'space-between'}}>

                    <View style={{flex:1}}>
                        <Text style={{ fontSize: 16, fontWeight:'bold'}}>$30</Text>

                    </View>

                    <View style={{height:30, width:30, borderRadius:50, paddingLeft:7, elevation:7, paddingTop:5, backgroundColor: 'green'}}>
                    <AntDesign name="arrowright" size={17} color="black" />
                        
                    </View>
                    
                </View>

            </View>
            {/* card 2 */}

            <View style={{width: "50%", elevation:10, borderRadius:20,height:200, backgroundColor:'#fff', paddingLeft:10, paddingTop:20, paddingRight:10,paddingBottom:20}}>
                <View style={{height:"50%", width:"50%", backgroundColor:"#fff", marginLeft:40}}>
                <Image source={require('../../assets/bottle.jpg')} style={{ height:"100%", width:"100%", borderTopLeftRadius:5, borderTopRightRadius:5}}/>

                </View>
                <View style={{height:"16%",marginTop:5 ,width:"100%", alignItems:'center', justifyContent:"center", backgroundColor:"#fff"}}>
                    <Text style={{ fontSize: 16, fontWeight:'bold'}}>Vitamin D plus</Text>
                </View>
                <View style={{display:"flex", marginTop:17, marginRight:10, marginLeft:10, flexDirection:'row', justifyContent:'space-between'}}>

                    <View style={{flex:1}}>
                        <Text style={{ fontSize: 16, fontWeight:'bold'}}>$30</Text>

                    </View>

                    <View style={{height:30, width:30, borderRadius:50, paddingLeft:7, elevation:7, paddingTop:5, backgroundColor: 'green'}}>
                    <AntDesign name="arrowright" size={17} color="black" />
                        
                    </View>
                    
                </View>

            </View>

        </View>

          {/* start of category listing */}

       <View style={{height:200,paddingLeft:7, flexDirection:"row", paddingRight:7, marginBottom:5}}>
            <View style={{width: "50%", marginRight:4, elevation:10, borderRadius:20,height:200, backgroundColor:'#fff', paddingLeft:10, paddingTop:20, paddingRight:10,paddingBottom:20}}>
                <View style={{height:"50%", width:"50%", backgroundColor:"#fff", marginLeft:40}}>
                <Image source={require('../../assets/bottle.jpg')} style={{ height:"100%", width:"100%", borderTopLeftRadius:5, borderTopRightRadius:5}}/>

                </View>
                <View style={{height:"16%",marginTop:5 ,width:"100%", alignItems:'center', justifyContent:"center", backgroundColor:"#fff"}}>
                    <Text style={{ fontSize: 16, fontWeight:'bold'}}>Vitamin D plus</Text>
                </View>
                <View style={{display:"flex", marginTop:17, marginRight:10, marginLeft:10, flexDirection:'row', justifyContent:'space-between'}}>

                    <View style={{flex:1}}>
                        <Text style={{ fontSize: 16, fontWeight:'bold'}}>$30</Text>

                    </View>

                    <View style={{height:30, width:30, borderRadius:50, paddingLeft:7, elevation:7, paddingTop:5, backgroundColor: 'green'}}>
                    <AntDesign name="arrowright" size={17} color="black" />
                        
                    </View>
                    
                </View>

            </View>
            {/* card 2 */}

            <View style={{width: "50%", elevation:10, borderRadius:20,height:200, backgroundColor:'#fff', paddingLeft:10, paddingTop:20, paddingRight:10,paddingBottom:20}}>
                <View style={{height:"50%", width:"50%", backgroundColor:"#fff", marginLeft:40}}>
                <Image source={require('../../assets/bottle.jpg')} style={{ height:"100%", width:"100%", borderTopLeftRadius:5, borderTopRightRadius:5}}/>

                </View>
                <View style={{height:"16%",marginTop:5 ,width:"100%", alignItems:'center', justifyContent:"center", backgroundColor:"#fff"}}>
                    <Text style={{ fontSize: 16, fontWeight:'bold'}}>Vitamin D plus</Text>
                </View>
                <View style={{display:"flex", marginTop:17, marginRight:10, marginLeft:10, flexDirection:'row', justifyContent:'space-between'}}>

                    <View style={{flex:1}}>
                        <Text style={{ fontSize: 16, fontWeight:'bold'}}>$30</Text>

                    </View>

                    <View style={{height:30, width:30, borderRadius:50, paddingLeft:7, elevation:7, paddingTop:5, backgroundColor: 'green'}}>
                    <AntDesign name="arrowright" size={17} color="black" />
                        
                    </View>
                    
                </View>

            </View>

        </View>

          {/* start of category listing */}

       <View style={{height:200,paddingLeft:7, flexDirection:"row", paddingRight:7, marginBottom:60}}>
            <View style={{width: "50%", marginRight:4, elevation:10, borderRadius:20,height:200, backgroundColor:'#fff', paddingLeft:10, paddingTop:20, paddingRight:10,paddingBottom:20}}>
                <View style={{height:"50%", width:"50%", backgroundColor:"#fff", marginLeft:40}}>
                <Image source={require('../../assets/bottle.jpg')} style={{ height:"100%", width:"100%", borderTopLeftRadius:5, borderTopRightRadius:5}}/>

                </View>
                <View style={{height:"16%",marginTop:5 ,width:"100%", alignItems:'center', justifyContent:"center", backgroundColor:"#fff"}}>
                    <Text style={{ fontSize: 16, fontWeight:'bold'}}>Vitamin D plus</Text>
                </View>
                <View style={{display:"flex", marginTop:17, marginRight:10, marginLeft:10, flexDirection:'row', justifyContent:'space-between'}}>

                    <View style={{flex:1}}>
                        <Text style={{ fontSize: 16, fontWeight:'bold'}}>$30</Text>

                    </View>

                    <View style={{height:30, width:30, borderRadius:50, paddingLeft:7, elevation:7, paddingTop:5, backgroundColor: 'green'}}>
                    <AntDesign name="arrowright" size={17} color="black" />
                        
                    </View>
                    
                </View>

            </View>
            {/* card 2 */}

            <View style={{width: "50%", elevation:10, borderRadius:20,height:200, backgroundColor:'#fff', paddingLeft:10, paddingTop:20, paddingRight:10,paddingBottom:20}}>
                <View style={{height:"50%", width:"50%", backgroundColor:"#fff", marginLeft:40}}>
                <Image source={require('../../assets/bottle.jpg')} style={{ height:"100%", width:"100%", borderTopLeftRadius:5, borderTopRightRadius:5}}/>

                </View>
                <View style={{height:"16%",marginTop:5 ,width:"100%", alignItems:'center', justifyContent:"center", backgroundColor:"#fff"}}>
                    <Text style={{ fontSize: 16, fontWeight:'bold'}}>Vitamin D plus</Text>
                </View>
                <View style={{display:"flex", marginTop:17, marginRight:10, marginLeft:10, flexDirection:'row', justifyContent:'space-between'}}>

                    <View style={{flex:1}}>
                        <Text style={{ fontSize: 16, fontWeight:'bold'}}>$30</Text>

                    </View>

                    <View style={{height:30, width:30, borderRadius:50, paddingLeft:7, elevation:7, paddingTop:5, backgroundColor: 'green'}}>
                    <AntDesign name="arrowright" size={17} color="black" />
                        
                    </View>
                    
                </View>

            </View>

        </View>
        </ScrollView>

      {/* end of category listing */}
      
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
})