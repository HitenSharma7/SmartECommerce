import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '../../components/headers/HomeHeader'
import AppSafeView from '../../components/Views/AppSafeView'

const ProfileScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader/>
      <Text>ProfileScreen</Text>
    </AppSafeView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})
