import React from 'react';
import {Provider} from 'react-redux';
import {RecoilRoot} from 'recoil';
import AppProvider from './hooks';
import Home from './pages/Home';

import store from './store';

const Main: React.FC = () => {
  return (
    <Provider store={store}>
      <RecoilRoot>
        <AppProvider>
          <Home />
        </AppProvider>
      </RecoilRoot>
    </Provider>
  );
};

export default Main;
