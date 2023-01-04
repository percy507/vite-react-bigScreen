// import request from '@/utils/request';

export function requestUserInfo() {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve({});
    }, 2000);
  });
}
