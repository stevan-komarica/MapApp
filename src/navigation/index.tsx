import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapView from '../screens/MapScreen';
import DetailScreen from '../screens/DetailScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserSetting from '../screens/UserSetting';
import { MainTabRouteName, MapViewStackRouteName } from './RouteNames';
import { MainStackParamList } from '../types/MainStackParamList';
import { renderTabBarIcon, renderTabBarLabel } from './tabBarUtils';
import { useTranslation } from 'react-i18next';

const MainTab = createBottomTabNavigator();
const MainStack = createNativeStackNavigator<MainStackParamList>();

const MapViewStack = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen
        name={MapViewStackRouteName.MapView}
        component={MapView}
      />
      <MainStack.Screen
        name={MapViewStackRouteName.DetailScreen}
        component={DetailScreen}
      />
    </MainStack.Navigator>
  );
};

const MainRoute = () => {
  const { t } = useTranslation();
  return (
    <MainTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: () => renderTabBarIcon(),
        tabBarLabel: ({ focused }) => renderTabBarLabel(route, focused, t),
      })}>
      <MainTab.Screen
        name={MainTabRouteName.MapViewTab}
        component={MapViewStack}
      />
      <MainTab.Screen
        name={MainTabRouteName.UserSetting}
        component={UserSetting}
      />
    </MainTab.Navigator>
  );
};

export default MainRoute;
