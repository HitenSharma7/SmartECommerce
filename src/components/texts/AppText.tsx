import { StyleSheet, Text, TextProps, View } from 'react-native'
import React,{FC} from 'react'
import {s} from "react-native-size-matters"
import { TextStyle } from 'react-native/types_generated/index'
import { AppColors } from '../../styles/color'
import { AppFonts } from '../../styles/fonts'

interface AppTextProps extends TextProps {
    children:React.ReactNode,
    style?:TextStyle|TextStyle[],
    variant?:"medium"|"bold",
}
const AppText:FC<AppTextProps> = ({children,style,variant="medium",...rest}) => {
  return (
    
      <Text{...rest} style={[styles[variant],style]} >{children}</Text>
    
  )
}

export default AppText

const styles = StyleSheet.create({
bold:{fontSize:s(19),
    fontWeight:"bold",
    color:"#000",
    fontFamily:AppFonts.Bold,
},
medium:{fontSize:s(16),
    color:AppColors.black,
    fontFamily:AppFonts.Medium,
},

})