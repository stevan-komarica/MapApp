import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import { AppColor } from '../constants';

type Props = {
  children: string;
  style?: TextStyle;
};

const CommonText = ({ children, style }: Props) => {
  return <Text style={[styles.defaultStyle, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  defaultStyle: {
    fontSize: 14,
    color: AppColor.black,
  },
});

export default CommonText;
