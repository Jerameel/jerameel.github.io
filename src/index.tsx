import React from 'react';

import { ThemeProvider } from 'emotion-theming';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from 'routes';
import { store, persistor, sagaMiddleware } from 'store';
import sagas from 'store/sagas';
import theme from 'utils/Theme';

// Initialize languages
import './locales/i18n';

import './index.css';
import * as serviceWorker from './serviceWorker';

// create the saga middleware
sagaMiddleware.run(sagas);

const App = () => {
  const onRehydate = async () => {
    // Do something after loading state
  };
  return (
    <React.StrictMode>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor(onRehydate)}>
          <Router>
            <ThemeProvider theme={theme}>
              <Routes />
            </ThemeProvider>
          </Router>
        </PersistGate>
      </ReduxProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
