import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App_26 from './App_26';

import { AppProvider_xx } from './Context_26';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider_xx>
    <App_26 />
    </AppProvider_xx>
  </React.StrictMode>
);
