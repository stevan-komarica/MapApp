import React, { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapView from 'react-native-map-clustering';
import { useNavigation } from '@react-navigation/native';
import { useAtom } from 'jotai';
import { MainStackParamList } from '../../types/MainStackParamList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MarkerItem } from '../../types/Marker';
import { markers } from './dummyData';
import { selectedMarkerAtom } from '../../jotai/selectedMarkerAtom';
import { useTranslation } from 'react-i18next';
import CommonText from '../../components/CommonText';
import CommonButton from '../../components/CommonButton';
import CommonLoader from '../../components/CommonLoader';
import makeStyle from './styles';
import { getThemeConfig, useTheme } from '../../theme';

const INITIAL_REGION = {
  latitude: 52.5,
  longitude: 19.2,
  latitudeDelta: 8.5,
  longitudeDelta: 8.5,
};

type MapViewNavigationProps = NativeStackNavigationProp<
  MainStackParamList,
  'MapView'
>;

const MapScreen = () => {
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [allMarkers, setAllMarkers] = useState<MarkerItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigation = useNavigation<MapViewNavigationProps>();
  const [selectedMarker, setSelectedMarker] = useAtom(selectedMarkerAtom);
  const { t } = useTranslation();
  const themeMode = useTheme();
  const theme = getThemeConfig(themeMode.mode);
  const styles = makeStyle(theme);

  useEffect(() => {
    if (selectedMarker) {
      setShowDetail(true);
    }
  }, [selectedMarker]);

  const fetchMarker = async () => {
    setTimeout(() => {
      setAllMarkers(markers);
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    fetchMarker();
  }, []);

  const handlePressMarker = (marker: MarkerItem) => {
    setSelectedMarker(marker);
    setShowDetail(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={INITIAL_REGION}
          onPress={() => setShowDetail(false)}>
          {allMarkers.map(marker => {
            return (
              <Marker
                key={marker.id}
                coordinate={marker.coordinate}
                onPress={() => handlePressMarker(marker)}
                stopPropagation={true}
              />
            );
          })}
        </MapView>
        {loading ? <CommonLoader /> : null}
        {showDetail && !!selectedMarker && !loading ? (
          <View style={styles.popup}>
            <View style={styles.popupContent}>
              <CommonText style={styles.popupTitle}>
                {t('mapView.advanced')}
              </CommonText>
              <CommonText style={styles.markerName}>
                {(selectedMarker as MarkerItem).detail.name}
              </CommonText>
              <CommonText>
                {(selectedMarker as MarkerItem).detail.description}
              </CommonText>
            </View>
            <CommonButton
              variant="contained"
              style={styles.goDetailBtn}
              onPress={() => {
                navigation.navigate('DetailScreen', {
                  markerID: (selectedMarker as MarkerItem).id,
                });
              }}>
              <CommonText style={styles.goDetailBtnText}>
                {t('mapView.goDetailBtn')}
              </CommonText>
            </CommonButton>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;
