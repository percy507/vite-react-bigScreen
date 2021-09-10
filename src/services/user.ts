import request from '@/utils/request';

export function requestUserInfo() {
  request.get('/userInfo');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({});
    }, 2000);
  });
}
