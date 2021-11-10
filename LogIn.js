import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Pressable , StyleSheet, Text, View,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard } from 'react-native';
import { Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default function LogIn() {

  const LogIn = () =>{
    Alert.alert('LogIn')
  }

  const SignIn = () =>{
    Alert.alert('SignIn')
  }

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
          <Text style={styles.text}>LOG IN</Text>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0} style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="username" placeholderTextColor="#696969"/>
                <TextInput style={styles.input} placeholder="password" placeholderTextColor="#696969"/>                    
            </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <View style={styles.container}>
        <Pressable style={styles.button} onPress={LogIn}>
            <Text style={styles.text}>Log in</Text>
         </Pressable>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
  },
  title_container: {
    flex:3,
    backgroundColor: '#202020',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 60,
    marginTop:10,
    fontSize: 30,
    color: "#FFF",
    borderWidth: 1,
    borderColor: "#FFF"
  },
  button:{    
    
    flex:1,
    backgroundColor:'#696969',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_input:{
    fontSize:30,
    color: "#FFF"
  },
  text:{
    fontSize:50,
    color: "#FFF"
  }
});
