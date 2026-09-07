import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useState} from 'react'
import AppTextInput from '../../components/inputs/AppTextInput'
import AppText from '../../components/texts/AppText'
import { sharedPaddingHorizontal } from '../../styles/sharedstyles'
import { IMAGES } from '../../constant/image-path'
import AppButton from '../../components/buttons/AppButton'
import { s,vs } from 'react-native-size-matters'
import { AppColors } from '../../styles/color'
import { useNavigation } from '@react-navigation/native'
const SignInScreen = () => {
    const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const navigation = useNavigation();
  return (
   
    <View style={styles.container}>
 <Image source={IMAGES.appLogo} style={styles.appLogo}/>


       <AppTextInput placeholder='Enter your Email' secureTextEntry={false} keyboardType='email-address'/>
       <AppTextInput placeholder='Enter your Password' secureTextEntry={true} keyboardType='default'/>
        <AppText variant='bold' >Smart Bazaar</AppText>
        <AppButton title={"Login"} onPress={()=> navigation.navigate("MainAppBottomTabs")} />
        <AppButton title={"SignUp"}  style={styles.signUp } textColor={AppColors.primary}
        onPress={()=>navigation.navigate("SignUp")}/>
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
    
    container: {
        alignItems: "stretch",
        paddingHorizontal: sharedPaddingHorizontal,
    },

    appLogo: {
        height: s(150),
        width: s(150),
        alignSelf: "center",
        marginBottom: vs(30),
    },
    signUp:{
        backgroundColor:AppColors.white,
        marginTop:s(15),
        borderWidth:1,
        borderColor:AppColors.primary,

    },
})
