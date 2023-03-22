import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, SafeAreaView, ScrollView, View } from 'react-native';
import CommonButton from '../../components/CommonButton';
import CommonText from '../../components/CommonText';
import { selectedLanguageAtom } from '../../jotai/selectedLanguageAtom';
import { getThemeConfig, useTheme } from '../../theme';
import makeStyle from './styles';

const UserSetting = () => {
  const { t, i18n } = useTranslation();
  const [showModalChangeLanguage, setShowModalChangeLanguage] =
    useState<boolean>(false);
  const [initLanguage, setInitLanguage] = useAtom(selectedLanguageAtom);
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    (initLanguage as string | undefined) ?? 'en',
  );
  const themeMode = useTheme();
  const theme = getThemeConfig(themeMode.mode);
  const styles = makeStyle(theme);

  useEffect(() => {
    if (initLanguage) {
      setSelectedLanguage(initLanguage as string);
    }
  }, [initLanguage]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.infoWrapper}>
          <View style={styles.infoRow}>
            <CommonText style={styles.infoLabel}>
              {t('userSetting.name')}
            </CommonText>
            <CommonText style={styles.infoText}>John Doe</CommonText>
          </View>
          <View style={[styles.infoRow, styles.marginTop10]}>
            <CommonText style={styles.infoLabel}>
              {t('userSetting.email')}
            </CommonText>
            <CommonText style={styles.infoText}>example@email.com</CommonText>
          </View>
          <View style={[styles.infoRow, styles.marginTop10]}>
            <CommonText style={styles.infoLabel}>
              {t('userSetting.phoneNumber')}
            </CommonText>
            <CommonText style={styles.infoText}>+123456789</CommonText>
          </View>
        </View>
        <CommonButton
          style={styles.changeLanguageBtn}
          onPress={() => setShowModalChangeLanguage(true)}>
          <CommonText style={styles.changeLanguageBtnText}>
            {t('userSetting.changeLang')}
          </CommonText>
        </CommonButton>
      </ScrollView>
      <Modal
        transparent
        onRequestClose={() => setShowModalChangeLanguage(false)}
        visible={showModalChangeLanguage}>
        <View style={styles.modalWrapper}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <CommonText style={styles.modalHeaderTitle}>
                {t('userSetting.changeLang')}
              </CommonText>
              <CommonButton
                variant="outlined"
                style={styles.closeBtn}
                onPress={() => setShowModalChangeLanguage(false)}>
                <CommonText style={styles.textWarning}>
                  {t('common.buttons.close')}
                </CommonText>
              </CommonButton>
            </View>
            <CommonButton
              variant="outlined"
              style={styles.languageRow}
              onPress={() => setSelectedLanguage('en')}>
              <CommonText>{t('common.english')}</CommonText>
              {selectedLanguage === 'en' ? (
                <CommonText style={styles.textSuccess}>✓</CommonText>
              ) : (
                <></>
              )}
            </CommonButton>
            <CommonButton
              variant="outlined"
              style={styles.languageRow}
              onPress={() => setSelectedLanguage('de')}>
              <CommonText>{t('common.german')}</CommonText>
              {selectedLanguage === 'de' ? (
                <CommonText style={styles.textSuccess}>✓</CommonText>
              ) : (
                <></>
              )}
            </CommonButton>
            <CommonButton
              style={styles.saveChangeBtn}
              onPress={() => {
                i18n.changeLanguage(selectedLanguage);
                setInitLanguage(selectedLanguage);
                setShowModalChangeLanguage(false);
              }}>
              <CommonText style={styles.textWhite}>
                {t('common.buttons.save')}
              </CommonText>
            </CommonButton>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default UserSetting;
