import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { requestUserInfo } from '@/services/user';
import { atomUserInfo } from '@/store/app';

export default function AppMainLayout() {
  const [userInfo, setUserInfo] = useAtom(atomUserInfo);

  console.log('userInfo', userInfo);

  useEffect(() => {
    requestUserInfo().then((data) => {
      setUserInfo(data);
    });
  }, [setUserInfo]);

  return <Outlet />;
}
