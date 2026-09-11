import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/Views/AppSafeView'
import HomeHeader from '../../components/headers/HomeHeader'
import ProductCard from '../../components/cards/ProductCard'
import { products } from '../../data/products'
import { vs } from 'react-native-size-matters'

const HomeScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      <FlatList
        numColumns={2}
        data={products}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={({item})=>
        <ProductCard imageURL={item.imageURL}
        productName={item.title}
        productPrice={item.price}
        onAddtoCartPress={() => {}}
        />}
      columnWrapperStyle={{justifyContent:'space-between',
        marginBottom:vs(10),
      }}
      contentContainerStyle={{paddingHorizontal:10}}
     
      />
    </AppSafeView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})