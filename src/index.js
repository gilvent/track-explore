import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import getStore from './app/redux/store.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './app/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
registerServiceWorker();

