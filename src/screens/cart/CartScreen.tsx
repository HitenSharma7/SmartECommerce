import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/Views/AppSafeView'
import HomeHeader from '../../components/headers/HomeHeader'
import AppText from '../../components/texts/AppText'
import { s, vs } from "react-native-size-matters"
import Ionicons from '@expo/vector-icons/build/Ionicons'
import { AppColors } from '../../styles/color'
import CartItem from '../../components/cart/CartItem'
import TotalView from '../../components/cart/TotalView'


const CartScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
     <CartItem
    title="PlayStation 5"
    imageURL="https://m.media-amazon.com/images/I/51fM0CKG+HL.jpg"
    price={499}
    qty={1}
    onIncreasePress={() => {}}
    onReducePress={() => {}}
    onDeletePress={() => {}}
/>
     <TotalView/>
    
    </AppSafeView>
  )

}

export default CartScreen

const styles = StyleSheet.create({
 
})