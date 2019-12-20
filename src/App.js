import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';

import { Provider } from 'react-redux';

import Routes from './routes';
import history from './services/history';

import './config/ReactotronConfig';

import { store, persistor } from './store';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <GlobalStyle />
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
