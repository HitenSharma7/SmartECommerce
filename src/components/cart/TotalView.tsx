import { StyleSheet, View } from 'react-native'
import React, { FC } from 'react'
import { s, vs } from 'react-native-size-matters'

import AppText from '../texts/AppText'
import { AppColors } from '../../styles/color'
import { tax, ShippingFee } from '../../constant/constant'

interface ITotalView {
    itemsPrice: number
}

const TotalView: FC<ITotalView> = ({ itemsPrice }) => {

    const taxAmount = (itemsPrice * tax) / 100
    const orderTotal = itemsPrice + taxAmount + ShippingFee

    return (
        <View style={styles.container}>

            {/* Items Price */}
            <View style={styles.row}>
                <AppText style={styles.textTitle}>
                    Items Price:
                </AppText>

                <AppText style={styles.textPrice}>
                    ${itemsPrice.toFixed(2)}
                </AppText>
            </View>

            {/* Taxes */}
            <View style={styles.row}>
                <AppText style={styles.textTitle}>
                    Taxes:
                </AppText>

                <AppText style={styles.textPrice}>
                    ${taxAmount.toFixed(2)}
                </AppText>
            </View>

            {/* Shipping Fee */}
            <View style={styles.row}>
                <AppText style={styles.textTitle}>
                    Shipping Fee:
                </AppText>

                <AppText style={styles.textPrice}>
                    ${ShippingFee.toFixed(2)}
                </AppText>
            </View>

            {/* Separator */}
            <View style={styles.separator} />

            {/* Order Total */}
            <View style={styles.row}>
                <AppText style={styles.totalTitle}>
                    Order Total:
                </AppText>

                <AppText style={styles.totalPrice}>
                    ${orderTotal.toFixed(2)}
                </AppText>
            </View>

        </View>
    )
}

export default TotalView

const styles = StyleSheet.create({

    container: {
        width: '100%',
        paddingHorizontal: s(10),
        paddingVertical: vs(10),
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: vs(6),
    },

    textTitle: {
        fontSize: s(17),
        fontWeight: '600',
    },

    textPrice: {
        fontSize: s(16),
    },

    separator: {
        height: 1,
        backgroundColor: AppColors.primary,
        marginVertical: vs(8),
    },

    totalTitle: {
        fontSize: s(19),
        fontWeight: 'bold',
    },

    totalPrice: {
        fontSize: s(19),
        fontWeight: 'bold',
        color: AppColors.primary,
    },
})