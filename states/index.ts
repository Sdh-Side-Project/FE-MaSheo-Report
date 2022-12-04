import { atom } from 'recoil';
import { v1 } from 'uuid';

export const accessTokenState = atom({
  key: `accessToken/${v1()}`,
  default: '',
});

export const soolTypeState = atom({
  key: `mostOrderedSoolType/${v1()}`,
  default: '',
});

export const soolState = atom({
  key: `mostOrderedSool/${v1()}`,
  default: '',
});
