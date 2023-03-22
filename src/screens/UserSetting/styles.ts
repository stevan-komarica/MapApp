import { StyleSheet } from 'react-native';

const makeStyle = (theme: ThemeType.ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.white,
    },
    infoWrapper: {
      backgroundColor: theme.colors.wheat,
      margin: 20,
      padding: 20,
    },
    infoRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    infoLabel: {
      flex: 1,
      color: theme.colors.black,
      fontWeight: 'bold',
    },
    infoText: {
      flex: 1,
      fontStyle: 'italic',
      color: theme.colors.black,
    },
    marginTop10: {
      marginTop: 10,
    },
    changeLanguageBtn: {
      margin: 20,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.primary,
      borderRadius: 10,
    },
    changeLanguageBtnText: {
      color: theme.colors.white,
    },
    modalWrapper: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.loaderOverlay,
    },
    modalContent: {
      width: 300,
      backgroundColor: theme.colors.white,
      padding: 20,
    },
    modalHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    modalHeaderTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.colors.black,
    },
    textPrimary: {
      color: theme.colors.primary,
    },
    languageRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 10,
      paddingVertical: 20,
      borderWidth: 0,
    },
    textWarning: {
      color: theme.colors.warning,
    },
    textSuccess: {
      color: theme.colors.success,
    },
    textWhite: {
      color: theme.colors.white,
    },
    saveChangeBtn: {
      backgroundColor: theme.colors.primary,
      borderRadius: 10,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    closeBtn: {
      borderWidth: 0,
    },
  });

export default makeStyle;
