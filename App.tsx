/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
//import AlbumList from './src/screen/AlbumList';
import Navigator from './src/navigator';
import Store from './src/redux/store';
import { Provider } from 'react-redux';
declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <Provider store={Store}>
      <StatusBar barStyle="dark-content" />
      <Navigator />
    </Provider>
  );
};

export default App;
