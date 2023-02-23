import React from 'react';
import TestPageLayout from '../sections/TestPage/TestPageLayout';

interface getNameProps {
  name: string | null;
}

export const getName = ({ name }: getNameProps ): string | null => {
  if (name) {
    return name
  }
  return null;
};


const TestPage = (): JSX.Element => {

  return (
    <>
      <h1>Test Page</h1>
      <TestPageLayout />
    </>
  )
}

export default TestPage;
