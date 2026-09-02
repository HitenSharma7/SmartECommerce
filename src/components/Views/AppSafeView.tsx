import React, { ReactNode ,FC} from 'react';
import { StyleSheet, View,ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppColors } from '../../styles/color';

interface AppSafeViewProp{
    children:ReactNode,
    style:ViewStyle,
}
const AppSafeView: FC<AppSafeViewProp> = ({ children, style }) => {
  return (
    <SafeAreaView style={styles.safeView} edges={['top', 'bottom']}>
      <View style={[styles.container, style]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default AppSafeView;

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: AppColors.white,
  },

  container: {
    flex: 1,
  },
});