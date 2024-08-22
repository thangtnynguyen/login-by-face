import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import { AppContextProvider } from './services/context/app.context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </RecoilRoot>
  </React.StrictMode>
);

reportWebVitals();
