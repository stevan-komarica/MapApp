import AsyncStorage from '@react-native-async-storage/async-storage';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';

const storage = createJSONStorage(() => AsyncStorage);

export const selectedLanguageAtom = atomWithStorage(
  'selectedLanguage',
  undefined,
  storage,
);
