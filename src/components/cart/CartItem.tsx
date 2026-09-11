import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { s, vs } from "react-native-size-matters"
import Ionicons from '@expo/vector-icons/Ionicons'
import { AppColors } from '../../styles/color'

const tempData = {
    id: 12,
    price: 499,
    title: "PlayStation 5",
    imageURL:
        "https://m.media-amazon.com/images/I/51fM0CKG+HL.jpg",
}

interface ICartItem {
    title:string,
    imageURL:string|number,
    price:number,
    qty:number,
    onIncreasePress: () => void,
    onDeletePress: () => void,
    onReducePress: () => void
}

const CartItem = ({
    title,
    imageURL,
    price,
    qty,
    onIncreasePress,
    onDeletePress,
    onReducePress
}: ICartItem) => {

    return (
        <View style={styles.container}>

            {/* Image */}
            <View style={styles.imageContainer}>
                <Image
                    source={
                        typeof imageURL === 'string'
                            ? { uri: imageURL }
                            : imageURL
                    }
                    style={styles.image}
                />
            </View>

            {/* Details */}
            <View style={styles.detailsContainer}>

                <Text style={styles.title}>
                    {title}
                </Text>

                <Text style={styles.price}>
                    ${price.toFixed(2)}
                </Text>

                {/* Quantity */}
                <View style={styles.quantityContainer}>

                    <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={onReducePress}
                        activeOpacity={0.7}
                    >
                        <Ionicons
                            name="remove"
                            size={s(16)}
                            color={AppColors.primary}
                        />
                    </TouchableOpacity>

                    <Text style={styles.quantityText}>
                        {qty}
                    </Text>

                    <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={onIncreasePress}
                        activeOpacity={0.7}
                    >
                        <Ionicons
                            name="add"
                            size={s(16)}
                            color={AppColors.primary}
                        />
                    </TouchableOpacity>

                </View>

            </View>

            {/* Delete */}
            <TouchableOpacity
                style={styles.deleteButtonContainer}
                onPress={onDeletePress}
                activeOpacity={0.7}
            >
                <Ionicons
                    name="trash-outline"
                    size={s(22)}
                    color="red"
                />
            </TouchableOpacity>

        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({

    container: {
        width: "100%",
        minHeight: vs(110),

        flexDirection: "row",
        alignItems: "center",

        paddingHorizontal: s(10),
        paddingVertical: vs(8),

        backgroundColor: AppColors.white,
    },

    imageContainer: {
        width: s(80),
        height: s(80),

        justifyContent: "center",
        alignItems: "center",
    },

    image: {
        width: s(75),
        height: s(75),

        borderRadius: s(5),
        resizeMode: "contain",
    },

    detailsContainer: {
        flex: 1,
        marginLeft: s(10),
        justifyContent: "center",
    },

    title: {
        fontSize: s(16),
        fontWeight: "600",
    },

    price: {
        fontSize: s(15),
        fontWeight: "bold",
        marginTop: vs(5),
    },

    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",

        marginTop: vs(8),
    },

    quantityButton: {
        width: s(28),
        height: s(28),

        borderWidth: 1,
        borderColor: AppColors.primary,
        borderRadius: s(6),

        justifyContent: "center",
        alignItems: "center",
    },

    quantityText: {
        fontSize: s(15),
        fontWeight: "600",

        marginHorizontal: s(12),
    },

    deleteButtonContainer: {
        width: s(40),
        height: s(40),

        justifyContent: "center",
        alignItems: "center",
    },
})