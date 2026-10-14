
import React from 'react';
import { View, TextInputProps,StyleSheet } from 'react-native';
import {
  Controller,
  Control,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import AppText from '../texts/AppText';

import AppTextInput from './AppTextInput';
import { vs } from 'react-native-size-matters';

interface Props {
  name: string;
  control: Control<any>;
  rules?: RegisterOptions<any>;
  keyboardType?: TextInputProps['keyboardType'];
  placeholder?: string;
  secureTextEntry?: boolean;
}

const AppTextInputControllers = ({
  name,
  control,
  rules,
  keyboardType,
  placeholder,
  secureTextEntry,
}: Props) => {
  return (
    <View>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value } }) => (
            <>
          <AppTextInput
            value={value}
            onChangeText={onChange}
            keyboardType={keyboardType}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            style={styles.errorInput}
            
          />

          <AppText style={styles.errormsg}>Some Error Message</AppText>
          </>
        )}
      />
    </View>
  );
};

export default AppTextInputControllers;
const styles = StyleSheet.create({
errorInput: {
    borderWidth: 1,
    borderColor: 'red',},
    errormsg: {
        color: 'red',
        fontSize: 12,
        marginTop: vs(-5),
        justifyContent:"center",
      },

})
