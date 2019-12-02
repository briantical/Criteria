import React from 'react';

import {SafeAreaView, StatusBar} from 'react-native';

import {Dashboard} from '_containers';
export default Index = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Dashboard />
      </SafeAreaView>
    </>
  );
};
