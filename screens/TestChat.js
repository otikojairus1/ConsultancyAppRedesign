import React from 'react';
import { View, KeyboardAvoidingView,Dimensions, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard  } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const KeyboardAvoidingComponent = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
        {/* <View style={{position:'absolute', flexDirection:'row', paddingLeft:7, alignItems:'center', marginLeft:5, top: 670, height:50, width: 300, backgroundColor:'#D7DCD3', borderTopLeftRadius: 10,borderTopRightRadius:10, borderBottomEndRadius:10, borderBottomStartRadius:10,}}> */}
                        {/* <FontAwesome name="search" size={24} color="black" /> */}
                <View style={{height: windowHeight, flex:1, width: windowWidth}}>
                <View style={{width:10}}></View>
                  <TextInput placeholder='Type a message...' style={{width: '100%', height:20}}/> 
                </View>
                <View style={{width:50, height:50, paddingLeft:10, elevation:7, paddingTop:10, backgroundColor:'green', position:'absolute', borderRadius:50,top:670, left: 306}}>
                  <Feather name="send" size={24} color="#fff" />
                </View>
          </View>
                    
        {/* </View> */}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  }
});

export default KeyboardAvoidingComponent;