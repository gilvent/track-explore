import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './app/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
registerServiceWorker();

