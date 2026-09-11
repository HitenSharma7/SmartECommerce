import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { s, vs } from "react-native-size-matters"
import { AppColors } from '../../styles/color'
import AppText from '../texts/AppText'
import { AppFonts } from '../../styles/fonts'
import Ionicons from '@expo/vector-icons/build/Ionicons'
import { commonStyles } from '../../styles/sharedstyles'
interface IProductCard {
    imageURL: string,
    productName: string,
    onAddtoCartPress: () => void,
    productPrice: number,
}
const ProductCard = ({
    imageURL,
    productName,
    productPrice,
    onAddtoCartPress,
}: IProductCard) => {
    return (
        <View style={styles.container} >
            {/* Add to Cart Button */}

            <TouchableOpacity style={styles.AddToCartButton} onPress={onAddtoCartPress}>
                <Ionicons name="cart-outline" size={s(16)} color={AppColors.white} />

            </TouchableOpacity>


            {/* Image UI */}
            <View style={styles.ImageContainer}>
                <Image style={styles.Image} source={{ uri: imageURL }} />
            </View>

            {/* Details */}

            <View style={styles.DetailsContainer}>
                <AppText style={styles.ProductName}> {productName}</AppText>
                <AppText style={styles.ProductPrice}>
                    {productPrice}$
                </AppText>
            </View>

        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    container: {
        height: vs(200),
        width: s(160),
        marginTop: vs(10),
        backgroundColor: AppColors.white,
        borderColor: AppColors.primary,
        borderRadius: s(10),
        ...commonStyles.shadow
    },
    ImageContainer: {
        overflow: 'hidden',
        borderTopLeftRadius: s(10),
        borderTopRightRadius: s(10),
        width: "100%",
        height: vs(120),
    },
    Image: {
        height: "100%",
        width: "100%",
        resizeMode: 'contain',
    },
    DetailsContainer: {
        flex: 1,
        paddingTop: s(8),
        paddingBottom: s(15),
        paddingHorizontal: s(10),
    },
    ProductName: {
        fontFamily: AppFonts.Medium,
        color: AppColors.primary,
        fontSize: s(14),
    },

    ProductPrice: {
        fontFamily: AppFonts.Bold,
        fontSize: s(16),
        marginTop: vs(4),
    },
    AddToCartButton: {
        position: 'absolute',
        top: vs(6),
        left: s(6),

        width: s(30),
        height: s(30),

        borderRadius: s(15),

        backgroundColor: AppColors.primary,

        justifyContent: 'center',
        alignItems: 'center',

        zIndex: 10,
        elevation: 5,
    },
})
