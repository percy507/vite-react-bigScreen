import 'normalize.css'; // A modern alternative to CSS resets
import 'moment/dist/locale/zh-cn';
import './styles/global.less';

import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { Provider } from 'jotai';
import moment from 'moment';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import ErrorBoundary from '@/components/ErrorBoundary';
import { AppLayout } from '@/layouts';

moment.locale('zh-cn');

// rewrite the transition data
zhCN.DatePicker!.lang.rangePlaceholder = ['开始时间', '结束时间'];

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ConfigProvider locale={zhCN}>
    <ErrorBoundary>
      <Provider>
        <BrowserRouter>
          <AppLayout />
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  </ConfigProvider>,
);
