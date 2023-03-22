import React, { ReactElement, useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { colors } from './colors';
import { Appearance, AppearanceProvider } from 'react-native-appearance';

const defaultMode = Appearance.getColorScheme() || 'light';
type Scheme = 'light' | 'dark';

declare global {
  namespace ThemeType {
    interface ThemeColors {
      colors: {
        white: string;
        black: string;
        wheat: string;
        loaderOverlay: string;
        primary: string;
        success: string;
        warning: string;
        error: string;
        disable: string;
      };
    }
  }
}

export const ThemeContext = React.createContext({
  mode: defaultMode,
  setMode: (mode: Scheme) => console.log(mode),
});

export const useTheme = () => React.useContext(ThemeContext);

type Props = {
  children: ReactElement | ReactElement[] | null;
};

const ManageThemeProvider = ({ children }: Props) => {
  const [themeState, setThemeState] = useState<Scheme>(defaultMode as Scheme);
  const setMode = (mode: Scheme) => {
    setThemeState(mode);
  };
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setThemeState(colorScheme as Scheme);
    });
    return () => subscription.remove();
  }, []);

  return (
    <ThemeContext.Provider value={{ mode: themeState, setMode }}>
      <ThemeProvider theme={themeState === 'dark' ? colors.light : colors.dark}>
        <>
          <StatusBar
            barStyle={themeState === 'dark' ? 'dark-content' : 'light-content'}
          />
          {children}
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

const ThemeManager = ({
  children,
}: {
  children: ReactElement | ReactElement[] | null;
}) => (
  <AppearanceProvider>
    <ManageThemeProvider>{children}</ManageThemeProvider>
  </AppearanceProvider>
);

export const getThemeConfig = (theme: any) => {
  return theme === 'dark'
    ? {
        colors: colors.light,
      }
    : {
        colors: colors.dark,
      };
};

export default ThemeManager;
