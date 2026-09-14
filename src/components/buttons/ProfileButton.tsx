import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { s } from 'react-native-size-matters'
import { AppColors } from '../../styles/color'

interface IProfileButton {
    title: string
    icon: keyof typeof Ionicons.glyphMap
    onPress: () => void
}

const ProfileButton: FC<IProfileButton> = ({
    title,
    icon,
    onPress,
}) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <View style={styles.leftContainer}>

                <Ionicons
                    name={icon}
                    size={s(22)}
                    color={AppColors.primary}
                />

                <Text style={styles.title}>
                    {title}
                </Text>

            </View>

            <Ionicons
                name="chevron-forward-outline"
                size={s(20)}
                color="gray"
            />

        </TouchableOpacity>
    )
}

export default ProfileButton

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: s(55),

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        paddingHorizontal: s(15),

        backgroundColor: AppColors.white,
        borderRadius: s(10),
    },

    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    title: {
        marginLeft: s(12),
        fontSize: s(16),
        fontWeight: '600',
    },
})