import '../styles/globals.css'
import type { AppProps } from 'next/app';
import TestingProvider  from '../sections/indexPage/UserProvider';
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
  )
}
