import React, { useState, useCallback } from 'react';

import SectionContainer from '../sections/sharedComponents/SectionContainer';
import PageHeading from '../sections/TransitionsPage/PageHeading';
import Button from '../sections/TransitionsPage/Button';
import List from '../sections/TransitionsPage/List';

const TransitionPage = () => {
  const [ arr, setArr ] = useState([1, 2, 3]);

  const handleAdd = () => {
    let max = 0;
    max = Math.max(...arr);
    if (arr.length === 0) {
      max = 0;
    }

    setArr((prev) => [...prev, max + 1 ]);
  }

  const handleRemove = useCallback((idx: number): void => {
    const splicedArr = arr.splice(idx, 1);
    setArr(((prev: typeof arr) => [...arr] ));
  }, [arr]);


  return (
    <>
      <PageHeading title={'Transition Page'} />
    <SectionContainer>
      <h2>TransitionGroup with CSSTransition</h2>
      <div style={{ margin: 'auto', textAlign: 'center'}}>
        <Button 
          color='red'
          onClick={handleAdd}
          >
          Push
        </Button>
      </div>
        <List data={arr} onClick={handleRemove}/>  
    </SectionContainer>
    </>
  )
}



export default TransitionPage;
