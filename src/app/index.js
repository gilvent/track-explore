import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter,Switch } from 'react-router-dom';

import getStore from './redux/store.js';
import MainLayout from './layouts/MainLayout';
import {MainRoutes} from './routes';

const store = getStore();

class App extends Component {
  render() {
    return (
      <Provider store ={store}>
        <BrowserRouter>
        <Switch>
              <MainLayout>
                  <MainRoutes />
              </MainLayout>
            {/* <Route path="*" /> */}
        </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;




