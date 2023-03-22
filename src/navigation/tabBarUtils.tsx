import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { AppColor } from '../constants';
import { MainTabRouteName } from './RouteNames';

export const renderTabBarLabel = (route: any, focused: boolean, t: any) => {
  switch (route.name) {
    case MainTabRouteName.MapViewTab:
      return (
        <Text style={focused ? styles.textPrimary : styles.textBlack}>
          {t('tabNames.mapView')}
        </Text>
      );
    case MainTabRouteName.UserSetting:
      return (
        <Text style={focused ? styles.textPrimary : styles.textBlack}>
          {t('tabNames.userSetting')}
        </Text>
      );
    default:
      return null;
  }
};

export const renderTabBarIcon = () => {
  // TO-DO: add correct icon
  return null;
};

const styles = StyleSheet.create({
  textBlack: {
    color: AppColor.black,
  },
  textPrimary: {
    color: AppColor.primary,
  },
  image: {
    width: 20,
    height: 20,
  },
});
