import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from "./routes"
import { Provider } from 'react-redux';
import store from 'store';

const rootElement = document.getElementById('root')
if(rootElement){
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router />
      </Provider>
    </React.StrictMode>
  );
}
