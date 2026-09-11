import { StyleSheet, View } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/Views/AppSafeView'
import AppTextInput from '../../components/inputs/AppTextInput'
import { commonStyles, sharedPaddingHorizontal } from '../../styles/sharedstyles'
import { s, vs } from 'react-native-size-matters'
import { AppColors } from '../../styles/color'
import AppButton from '../../components/buttons/AppButton'
import { IS_ANDROID } from '../../constant/constant'

const CheckOutScreen = () => {
    return (
        <AppSafeView>

            {/* Input Container */}
            <View style={styles.inputContainer}>

                <AppTextInput
                    placeholder="Enter your name"
                />

                <AppTextInput
                    placeholder="Enter your email"
                />

                <AppTextInput
                    placeholder="Detailed Address"
                />

            </View>

            {/* Bottom Button */}
            <View style={styles.bottomButtonContainer}>
                <AppButton
                    title="Place Order"
                />
            </View>

        </AppSafeView>
    )
}

export default CheckOutScreen

const styles = StyleSheet.create({

    inputContainer: {
        ...commonStyles.shadow,

        padding: s(8),
        paddingTop: vs(20),

        margin: s(8),

        borderRadius: s(8),

        width: '90%',
        alignSelf: 'center',

        backgroundColor: AppColors.white,
    },

    bottomButtonContainer: {
        position: 'absolute',

        bottom: IS_ANDROID ? vs(15) : 0,
        left: 0,
        right: 0,

        paddingHorizontal: sharedPaddingHorizontal,
        paddingTop: vs(10),
        paddingBottom: vs(10),

        borderTopWidth: 1,
        borderColor: AppColors.lightGray,

        backgroundColor: AppColors.white,
    },

})