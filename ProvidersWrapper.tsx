import React, { ReactNode } from 'react';
import {store} from '@src/redux/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {SheetProvider} from 'react-native-actions-sheet';

const ProvidersWrapper: React.FC<Props> = ({children}) => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <SheetProvider>{children}</SheetProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

export default ProvidersWrapper;

interface Props{
  children: ReactNode
}