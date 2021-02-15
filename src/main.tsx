import React from 'react';
import {RecoilRoot} from 'recoil'
import AppProvider from './hooks';
import Home from './pages/Home';


const Main: React.FC = () => {
  return (
    <RecoilRoot>
      <AppProvider>
      <Home />
      </AppProvider>
    </RecoilRoot>
  );
}

export default Main;