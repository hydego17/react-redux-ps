import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux/configureStore';

import { ChakraProvider } from '@chakra-ui/react';

import App from './components/App';

const store = configureStore();

render(
  <ReduxProvider store={store}>
    <Router>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Router>
  </ReduxProvider>,
  document.getElementById('app')
);
