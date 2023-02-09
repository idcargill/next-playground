import React from 'react';


export const getName = (obj) => {
  if (obj && obj.name) {
    return obj.name
  }
  return null;
};


const TestPage = () => {

  return (
    <>
      <h1>Test Page</h1>
    </>
  )
}

export default TestPage;
