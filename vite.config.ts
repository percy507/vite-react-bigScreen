import legacy from '@vitejs/plugin-legacy';
import reactRefresh from '@vitejs/plugin-react-refresh';
import fs from 'fs';
import lessToJS from 'less-vars-to-js';
import path from 'path';
import px2rem from 'postcss-pxtorem';
import { defineConfig } from 'vite';
import styleImport from 'vite-plugin-style-import';

import { dependencies } from './package.json';
import checkVscodeExtension from './plugins/check-vscode-extension';
import eslintPlugin from './plugins/vite-plugin-eslint';
import stylelintPlugin from './plugins/vite-plugin-stylelint';
import uiConfig from './src/ui.config.json'; // 设计稿比例配置

if (process.env.NODE_ENV === 'development') {
  // check if required vscode extensions installed
  checkVscodeExtension([
    'dbaeumer.vscode-eslint',
    'esbenp.prettier-vscode',
    'stylelint.vscode-stylelint',
  ]);
}

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './src/styles/antd-variables.less'), 'utf8'),
);

function renderChunks(deps: Record<string, string>) {
  let chunks: Record<string, string[]> = {};
  Object.keys(deps).forEach((key) => {
    if (['react', 'react-router-dom', 'react-dom'].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  define: {
    // VITE_BUILD_MODE: `"${process.env.VITE_BUILD_MODE || 'dev'}"`,
  },
  plugins: [
    eslintPlugin(),
    stylelintPlugin(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
    reactRefresh(),
    // 按需加载样式文件
    styleImport({
      libs: [
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: (name) => {
            return `antd/es/${name}/style/index`;
          },
        },
      ],
    }),
  ],
  css: {
    // css modules
    modules: {
      scopeBehaviour: 'local',
      generateScopedName: '[local]_[hash:base64:6]',
    },
    postcss: {
      plugins: [
        px2rem({
          rootValue: uiConfig.width / uiConfig.base_num,
          unitPrecision: 5,
          propList: ['*'],
          selectorBlackList: [],
          replace: true,
          mediaQuery: false,
          minPixelValue: 0,
          // exclude: /node_modules/i,
        }),
      ],
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: themeVariables,
      },
    },
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    target: 'es2015',
    sourcemap: false,
    rollupOptions: {
      output: {
        // 抽离公共模块代码
        manualChunks: {
          vendor: ['react', 'react-router-dom', 'react-dom'],
          ...renderChunks(dependencies),
        },
      },
    },
  },
});
