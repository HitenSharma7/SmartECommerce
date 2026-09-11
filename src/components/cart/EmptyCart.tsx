import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import Ionicons from '@expo/vector-icons/build/Ionicons'

import AppSafeView from '../Views/AppSafeView'
import AppText from '../texts/AppText'
import { AppColors } from '../../styles/color'
import { AppFonts } from '../../styles/fonts'

interface IEmptyCart {
    onStartShopping: () => void
}

const EmptyCart = ({ onStartShopping }: IEmptyCart) => {
    return (
        <AppSafeView>

            {/* Cart Icon */}
            <Ionicons
                name="bag-outline"
                size={s(90)}
                color={AppColors.primary}
                style={styles.cartIcon}
            />

            {/* Empty Cart Title */}
            <AppText style={styles.emptyCartText}>
                Your Cart is Empty
            </AppText>

            {/* Description */}
            <AppText style={styles.descriptionText}>
                Browse our products to add items to your cart
            </AppText>

            {/* Start Shopping Button */}
            <TouchableOpacity
                style={styles.btnContainer}
                onPress={onStartShopping}
                activeOpacity={0.8}
            >
                <AppText style={styles.btnText}>
                    Start Shopping
                </AppText>
            </TouchableOpacity>

        </AppSafeView>
    )
}

export default EmptyCart

const styles = StyleSheet.create({

    cartIcon: {
        alignSelf: 'center',
        marginTop: vs(90),
    },

    emptyCartText: {
        alignSelf: 'center',
        marginTop: vs(20),
        fontSize: s(27),
        fontFamily: AppFonts.Bold,
    },

    descriptionText: {
        alignSelf: 'center',
        textAlign: 'center',
        color: 'gray',
        fontSize: s(15),
        marginTop: vs(10),
        paddingHorizontal: s(25),
        lineHeight: vs(22),
    },

    btnContainer: {
        width: '75%',
        height: vs(45),

        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',

        marginTop: vs(25),

        backgroundColor: AppColors.primary,
        borderRadius: s(12),

        elevation: 3,
    },

    btnText: {
        color: AppColors.white,
        fontSize: s(17),
        fontFamily: AppFonts.Medium,
    },
})