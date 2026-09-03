import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import AppTextInput from '../../components/inputs/AppTextInput'
const SignInScreen = () => {
  return (
    <View>
 <Image source={{}}/>
       <AppTextInput placeholder='Enter your Email' secureTextEntry={false} keyboardType='email-address'/>
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({})