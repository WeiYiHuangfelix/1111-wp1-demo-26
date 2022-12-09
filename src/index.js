// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App_26 from './App_26';
import { BlogContextProvider_26 } from './BlogContext_26';

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BlogContextProvider_26>
      <App_26 />
    </BlogContextProvider_26>
  </React.StrictMode>
);
