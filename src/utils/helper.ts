import {COMMON} from './constant';
const setLocalStore = (key: string, val: any) => {
  localStorage.setItem(key, JSON.stringify(val));
}

const authenticated = () => {
  return !!localStorage.getItem(COMMON.ACCESS_TOKEN);
}

export const helper = {
  setLocalStore,
  authenticated
}