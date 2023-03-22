import AsyncStorage from '@react-native-async-storage/async-storage';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';

const storage = createJSONStorage(() => AsyncStorage);

export const selectedMarkerAtom = atomWithStorage(
  'selectedMarker',
  undefined,
  storage,
);
