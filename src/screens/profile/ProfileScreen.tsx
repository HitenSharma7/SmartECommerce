import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '../../components/headers/HomeHeader'
import AppSafeView from '../../components/Views/AppSafeView'
import ProfileButton from '../../components/buttons/ProfileButton'
import { useNavigation } from '@react-navigation/native'
import { AppColors } from '../../styles/color'
import MyOrdersScreen from './MyOrdersScreen'

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <AppSafeView>
      <HomeHeader/>
      <ProfileButton
        title="My Profile"
        icon="person-outline"
        onPress={() => console.log("My Profile pressed")}
      />
      <ProfileButton
        title="Languages"
        icon="language-outline"
        onPress={() => console.log("Language pressed")}
      />
      <ProfileButton
        title="My Orders"
        icon="list-outline"
        onPress={() => navigation.navigate("MyOrdersScreen")}
      />
    </AppSafeView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})
