import React from 'react';
import {store} from '@health/redux/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {SheetProvider} from 'react-native-actions-sheet';

const Providers = ({children}) => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <SheetProvider>{children}</SheetProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

export default Providers;
