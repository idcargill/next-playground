import '../styles/globals.css';
import type { AppProps } from 'next/dist/shared/lib/router/router';
import TestingProvider from '../sections/sharedComponents/UserProvider';
import { UserProvider } from '@auth0/nextjs-auth0';
import { SampleContextProvider } from '../sections/context/sampleContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserProvider>
        <SampleContextProvider>
          <TestingProvider>
            <Component {...pageProps} />
          </TestingProvider>
        </SampleContextProvider>
      </UserProvider>
    </>
  );
}
