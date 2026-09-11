import { StyleSheet, TouchableOpacity,StyleProp,ViewStyle } from 'react-native'
import React from 'react'
import AppText from '../texts/AppText'
import { s, vs } from 'react-native-size-matters'
import { AppColors } from '../../styles/color'

interface AppButtonProps {
    onPress?: () => void;
    title: string;
    backgroundColor?: string;
    textColor?: string;
    style?: StyleProp<ViewStyle>;
}

const AppButton = ({
     onPress,
  title,
  backgroundColor = AppColors.primary,
  textColor = AppColors.white,
  style,
}: AppButtonProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={[styles.button, { backgroundColor },style]}
        >
            <AppText
                variant="medium"
                style={[styles.title, { color: textColor }]}
            >
                {title}
            </AppText>
        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: vs(40),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: s(15),
        marginTop:vs(15),
    },

    title: {},
})