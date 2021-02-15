import React from 'react';
import {TodoProvider} from './tudo';

const AppProvider: React.FC = ({children}) => (
  <TodoProvider>
   {children}
  </TodoProvider>
);

export default AppProvider;
