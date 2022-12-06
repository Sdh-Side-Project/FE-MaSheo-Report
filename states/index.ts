import { atom } from 'recoil';

export const accessTokenState = atom({
  key: 'accessToken',
  default: '',
});

export const soolTypeState = atom({
  key: 'mostOrderedSoolType',
  default: '',
});

export const soolState = atom({
  key: 'mostOrderedSool',
  default: '',
});
