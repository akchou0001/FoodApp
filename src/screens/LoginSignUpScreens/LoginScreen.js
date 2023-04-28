import React, { useState } from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native'
import {titles, colors} from '../../globals/style'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = () => {
  const [emailfocus, setEmailfocus] = useState(false);
  const [passwordfocus, setPasswordfocus] = useState(false);
  const [showpassword, setShowpassword] = useState(false);

  return (
    <View style={styles.container}>
        <Text style={styles.head1}>Sign In</Text>
        <View style={styles.inputout}>
          <Feather name="user" size={24} color={emailfocus===true?colors.text1:colors.text2} />
          <TextInput 
            style={styles.input} 
            placeholder='Email'
            onFocus={()=>{
              setEmailfocus(true)
              setPasswordfocus(false)
              setShowpassword(false)
            }} />
        </View>
        <View style={styles.inputout}>
          <Feather name="unlock" size={24} color={passwordfocus===true?colors.text1:colors.text2} />
          <TextInput 
            style={styles.input} 
            placeholder='Password'
            onFocus={()=>{
              setEmailfocus(false)
              setPasswordfocus(true)
            }} 
            secureTextEntry={showpassword===false?true:false} />
          <Ionicons 
            name={showpassword===false?"eye-off":"eye"} 
            size={24} 
            color="black"
            onPress={()=>
              setShowpassword(!showpassword)
            } />
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  head1: {
    fontSize: titles.title1,
    fontWeight: 'bold',
    color: colors.text1,
    marginVertical: 10,
    textAlign: 'center',
  },
  inputout:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    width: '80%',
    backgroundColor: colors.col1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    elevation: 20,
  },
  input: {
    width: '80%',
    fontSize: 18,
    marginLeft: 10,
  }
})
export default LoginScreen