import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import store from '_store';

import Index from './app/Index';

const App = () => {
  //Hide the splash screen once component mounts
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};

export default App;
