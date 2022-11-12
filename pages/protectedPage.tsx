import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';


const ProtectedPage = () => {

  return (
    <h1>This page is protected!</h1>
  )
}

export default ProtectedPage;

export const getServerSideProps = withPageAuthRequired();
