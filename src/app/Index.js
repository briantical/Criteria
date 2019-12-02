import React, {useEffect} from 'react';

import {SafeAreaView, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import {Dashboard} from '_containers';
export default Index = ({store}) => {
  useEffect(() => SplashScreen.hide());

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Dashboard />
      </SafeAreaView>
    </>
  );
};
