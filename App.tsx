import React, { useEffect } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import MainRoute from './src/navigation';
import { enableLatestRenderer } from 'react-native-maps';
import { Provider, useAtom } from 'jotai';
import appStore from './src/jotai/store';
import { selectedLanguageAtom } from './src/jotai/selectedLanguageAtom';
import { useTranslation } from 'react-i18next';
import { getThemeConfig, useTheme } from './src/theme';
import { ThemeProvider } from 'styled-components/native';

// to use the latest renderer of Google Maps
enableLatestRenderer();

const App = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage] = useAtom(selectedLanguageAtom);
  const themeMode = useTheme();
  const theme = getThemeConfig(themeMode.mode);
  // console.log('thje', theme);

  useEffect(() => {
    if (selectedLanguage) {
      i18n.changeLanguage(selectedLanguage as string);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLanguage]);

  return (
    <Provider store={appStore}>
      <ThemeProvider
        theme={{
          ...DefaultTheme,
          colors: theme,
        }}>
        <NavigationContainer>
          <MainRoute />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};
export default App;
