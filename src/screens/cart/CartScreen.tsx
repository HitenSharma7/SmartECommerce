import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'

import AppSaveView from '../../components/Views/AppSafeView'
import HomeHeader from '../../components/headers/HomeHeader'
import CartItem from '../../components/cart/CartItem'
import TotalsView from '../../components/cart/TotalView'
import { products } from '../../data/products'
import { sharedPaddingHorizontal } from '../../styles/sharedstyles'
import AppButton from '../../components/buttons/AppButton'
import { useNavigation } from '@react-navigation/native'

const CartScreen = () => {
const navigation = useNavigation()
    const handleIncrease = (id: number) => {
        console.log("Increase:", id)
    }

    const handleReduce = (id: number) => {
        console.log("Reduce:", id)
    }

    const handleDelete = (id: number) => {
        console.log("Delete:", id)
    }

    return (
        <AppSaveView>

            <HomeHeader />

            <View style={styles.container}>

                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <CartItem
                            {...item}
                            qty={1}
                            onIncreasePress={() => handleIncrease(item.id)}
                            onReducePress={() => handleReduce(item.id)}
                            onDeletePress={() => handleDelete(item.id)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                />

                <TotalsView
                    itemsPrice={5000}
                    orderTotal={5025}
                />

                <AppButton title="Continue" onPress={()=>navigation.navigate("CheckOutScreen")} />

            </View>

        </AppSaveView>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: sharedPaddingHorizontal,
    },
})