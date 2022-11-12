import '../styles/globals.css'
import type { AppProps } from 'next/app';
import TestingProvider  from '../sections/sharedComponents/UserProvider';
import { UserProvider } from '@auth0/nextjs-auth0';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <UserProvider>
      <TestingProvider>
        <Component {...pageProps} />
      </TestingProvider>
    </UserProvider>
    </>
  )
}
