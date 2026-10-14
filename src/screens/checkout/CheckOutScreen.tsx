import { StyleSheet, View } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/Views/AppSafeView'
import AppTextInput from '../../components/inputs/AppTextInput'
import { commonStyles, sharedPaddingHorizontal } from '../../styles/sharedstyles'
import { s, vs } from 'react-native-size-matters'
import { AppColors } from '../../styles/color'
import AppButton from '../../components/buttons/AppButton'
import { IS_ANDROID } from '../../constant/constant'
import AppTextInputControllers from '../../components/inputs/AppTextInputControllers'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'


const Schema = yup.object().shape({
    fullName: yup.string().required("Full Name is required").min(3, "Full Name must be at least 3 characters"),

    phoneNumber: yup.string().required("Phone Number is required").matches(/^[0-9]{10}$/, "Must be a valid 10-digit phone number")
.min(10, "Phone Number must be at least 10 digits"),
    DetailedAddress: yup.string().required("Detailed Address is required").min(10, "Detailed Address must be at least 10 characters"),

}).required()
type formData = yup.InferType<typeof Schema>

const CheckOutScreen = () => {
    const { control, handleSubmit } = useForm({
        resolver: yupResolver(Schema),
    })
    const saveOrder = (formData: formData) => {
        console.log("Form Data:", formData)
    }
    return (
        <AppSafeView>

            {/* Input Container */}
            <View style={styles.inputContainer}>

                <AppTextInputControllers
                    control={control}
                    name={"fullName"}
                    placeholder="Enter your name"
                />

                <AppTextInputControllers
                    control={control}
                    name={"phoneNumber"}
                    placeholder="Enter your phone number"
                />

                <AppTextInputControllers
                    control={control}
                    name={"DetailedAddress"}
                    placeholder="Detailed Address"
                />

            </View>

            {/* Bottom Button */}
            <View style={styles.bottomButtonContainer}>
                <AppButton
                    title="Place Order"
                    onPress={handleSubmit(saveOrder)}
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