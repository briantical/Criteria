import React from 'react';
import {Provider} from 'react-redux';
import store from '_store';

import Index from './app/Index';

const App = () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};

export default App;
