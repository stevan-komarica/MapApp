import { Dimensions, StyleSheet } from 'react-native';

const makeStyle = (theme: ThemeType.ThemeColors) =>
  StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      flexGrow: 1,
      position: 'relative',
      backgroundColor: theme.colors.white,
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    popup: {
      position: 'absolute',
      bottom: 20,
      width: Dimensions.get('screen').width * 0.8,
      transform: [
        {
          translateX: Dimensions.get('screen').width * 0.1,
        },
      ],
      borderRadius: 10,
      padding: 10,
      backgroundColor: theme.colors.white,
    },
    popupContent: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    popupTitle: {
      fontWeight: 'bold',
      fontSize: 18,
      color: theme.colors.black,
    },
    markerName: {
      fontWeight: 'bold',
      marginTop: 20,
    },
    goDetailBtn: {
      backgroundColor: theme.colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 20,
    },
    goDetailBtnText: {
      color: theme.colors.white,
    },
  });

export default makeStyle;
