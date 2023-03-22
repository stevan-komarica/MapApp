import React, { ReactElement } from 'react';
import { StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import { AppColor } from '../constants';

type Props = {
  children: ReactElement | ReactElement[];
  style?: ViewStyle;
  variant?: 'outlined' | 'contained';
  onPress?: () => void;
};

const CommonButton = ({
  children,
  style,
  variant = 'contained',
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.defaultStyle,
        variant === 'contained' ? styles.containedBtn : styles.outlinedBtn,
        style,
      ]}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    borderRadius: 10,
  },
  outlinedBtn: {
    borderWidth: 1,
    borderColor: AppColor.disable,
  },
  containedBtn: {
    backgroundColor: AppColor.primary,
  },
});

export default CommonButton;
