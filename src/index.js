import React from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css'
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store'
const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);