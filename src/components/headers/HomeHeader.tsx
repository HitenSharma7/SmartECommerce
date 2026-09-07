import { StyleSheet, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { s, vs } from 'react-native-size-matters'

const HomeHeader = () => {
  return (
    <LinearGradient
      colors={['#000000', '#111111', '#000000']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <Image
        source={require('../../assets/images/app-logo.png')}
        style={styles.logo}
        tintColor="#FFFFFF"
      />
    </LinearGradient>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
  container: {
    height: vs(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: s(18),
    borderBottomRightRadius: s(18),
  },

  logo: {
    width: s(85),
    height: vs(42),
    resizeMode: 'contain',
  },
})