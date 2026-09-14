import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/Views/AppSafeView'
import MyOrders from '../../components/profilecomp/MyOrders'


const MyOrdersScreen = () => {
  return (
    <AppSafeView>
      <MyOrders/>
      
    </AppSafeView>
  )
}

export default MyOrdersScreen

const styles = StyleSheet.create({})