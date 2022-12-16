import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: sessionStorage,
});

export const accessTokenState = atom({
  key: 'accessToken',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const soolTypeState = atom({
  key: 'mostOrderedSoolType',
  default: '',
});

export const soolState = atom({
  key: 'mostOrderedSool',
  default: '',
});
