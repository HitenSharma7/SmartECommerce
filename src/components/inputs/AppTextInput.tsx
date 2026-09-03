import { StyleSheet, Text, View,TextInput ,StyleProp,TextStyle,KeyboardTypeOptions} from 'react-native'
import React from 'react'
import {s,vs} from 'react-native-size-matters'
import { AppColors } from '../../styles/color'


interface AppTextInputProps {
  value: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  style?: StyleProp<TextStyle>;
  onChangeText?: (text: string) => void;
}
export default function AppTextInput({value,placeholder,secureTextEntry,keyboardType,style,onChangeText}:AppTextInputProps) {
  return (
    <View>
      <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      style={[styles.input,style]}
      
      ></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        marginTop:s(15),
        height:vs(50),
        width:"100%",
        borderRadius:s(15),
        marginBottom:vs(10),
        borderWidth:s(1),
        paddingHorizontal:s(15),
        borderColor:AppColors.borderColor,
        fontSize:s(15),
       },
})