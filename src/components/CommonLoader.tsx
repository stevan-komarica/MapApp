import React from 'react';
import { ActivityIndicator, StyleSheet, View, ViewStyle } from 'react-native';
import { AppColor } from '../constants';

type Props = {
  style?: ViewStyle;
};

const CommonLoader = ({ style }: Props) => {
  return (
    <View style={[styles.defaultStyle, style]}>
      <ActivityIndicator size="large" color={AppColor.white} />
    </View>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: AppColor.loaderOverlay,
  },
});

export default CommonLoader;
