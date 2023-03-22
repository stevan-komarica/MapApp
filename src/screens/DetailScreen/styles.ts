import { StyleSheet } from 'react-native';

const makeStyle = (theme: ThemeType.ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.white,
    },
    header: {
      flexDirection: 'row',
      padding: 10,
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 0.5,
      borderBottomColor: theme.colors.black,
    },
    headerTitle: {
      color: theme.colors.black,
      fontWeight: 'bold',
    },
    rightView: {
      width: 50,
    },
    backBtn: {
      borderWidth: 0,
    },
    backButtonText: {
      color: theme.colors.primary,
    },
    content: {
      padding: 20,
    },
    infoWrapper: {
      backgroundColor: theme.colors.wheat,
      padding: 20,
      borderRadius: 20,
    },
    infoRow: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    infoLabel: {
      color: theme.colors.black,
      fontWeight: 'bold',
    },
    infoText: {
      fontStyle: 'italic',
      color: theme.colors.black,
    },
    marginTop20: {
      marginTop: 20,
    },
  });

export default makeStyle;
