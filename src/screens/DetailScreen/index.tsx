import { useNavigation } from '@react-navigation/native';
import { useAtom } from 'jotai';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';
import CommonButton from '../../components/CommonButton';
import CommonText from '../../components/CommonText';
import { selectedMarkerAtom } from '../../jotai/selectedMarkerAtom';
import { getThemeConfig, useTheme } from '../../theme';
import { MarkerItem } from '../../types/Marker';
import makeStyle from './styles';

const DetailScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [selectedMarker] = useAtom(selectedMarkerAtom);
  const themeMode = useTheme();
  const theme = getThemeConfig(themeMode.mode);
  const styles = makeStyle(theme);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <CommonButton
          style={styles.backBtn}
          variant="outlined"
          onPress={() => {
            navigation.goBack();
          }}>
          <CommonText style={styles.backButtonText}>
            {t('common.buttons.back')}
          </CommonText>
        </CommonButton>
        <CommonText style={styles.headerTitle}>
          {t('detailScreen.title')}
        </CommonText>
        <View style={styles.rightView} />
      </View>
      <View style={styles.content}>
        <View style={styles.infoWrapper}>
          <View style={styles.infoRow}>
            <CommonText style={styles.infoLabel}>
              {t('detailScreen.markerName')}
            </CommonText>
            <CommonText style={styles.infoText}>
              {(selectedMarker as MarkerItem).detail.name}
            </CommonText>
          </View>
          <View style={[styles.infoRow, styles.marginTop20]}>
            <CommonText style={styles.infoLabel}>
              {t('detailScreen.markerDesc')}
            </CommonText>
            <CommonText style={styles.infoText}>
              {(selectedMarker as MarkerItem).detail.description}
            </CommonText>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;
