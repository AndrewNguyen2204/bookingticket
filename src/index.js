import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/storeConfig';
import { DOMAIN } from './util/settings/config';

// websocket with signalR
import * as signalR from '@aspnet/signalr';
export const connection = new signalR.HubConnectionBuilder().withUrl(`${DOMAIN}/DatVeHub`).configureLogging(signalR.LogLevel.Information).build();

connection.start().then(function () {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}).catch(err => {
  console.log(err);
});


reportWebVitals();
