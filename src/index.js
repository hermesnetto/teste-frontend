import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './layout/App';

import '../node_modules/normalize.css/normalize.css';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();