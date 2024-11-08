import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React, {ReactNode} from 'react';
import {SheetProvider} from 'react-native-actions-sheet';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const queryClient = new QueryClient();
const ProvidersWrapper: React.FC<Props> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <SheetProvider>{children}</SheetProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default ProvidersWrapper;

interface Props {
  children: ReactNode;
}
