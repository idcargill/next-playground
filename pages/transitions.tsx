import React, { useState, useEffect } from 'react';

import SectionContainer from '../sections/sharedComponents/SectionContainer';
import PageHeading from '../sections/sharedComponents/PageHeading';
import Button from '../sections/sharedComponents/Button';
import List from '../sections/TransitionsPage/List';
import StyledCompList from '../sections/TransitionsPage/StyledCompList';

const TransitionPage = (): any => {
  const [arr, setArr] = useState([1, 2, 3]);
  const [styleData, setStyleData] = useState<any[]>([1]);

  useEffect(() => {
    const updatedItems = styleData.map((i) => ({ item: i, state: true }));
    setStyleData(updatedItems);
  }, []);

  const handleAdd = (): void => {
    let max = 0;
    max = Math.max(...arr);
    if (arr.length === 0) {
      max = 0;
    }
    setArr((prev) => [...prev, max + 1]);
  };

  const handleRemove = (idx: number): void => {
    arr.splice(idx, 1);
    setArr((prev: typeof arr) => [...arr]);
  };

  const handleRemoveStyled = (item: number): void => {
    const previous = JSON.parse(JSON.stringify(styleData));
    const filtered = previous.filter((i: any) => i.item !== item);
    setStyleData(filtered);
  };

  const handleAddStyled = (): void => {
    let maxS = 0;
    const nums = styleData.map((i) => i.item);
    maxS = Math.max(...nums);
    if (styleData.length === 0) {
      maxS = 0;
    }
    setStyleData((pre) => [...pre, { item: maxS + 1, state: true }]);
  };
  return (
    <>
      <PageHeading title={'Transition Page'} />
      <SectionContainer name="CssTransition">
        <h2>TransitionGroup with CSSTransition using Module.css</h2>
        <div style={{ margin: 'auto', textAlign: 'center' }}>
          <Button color="red" onClick={handleAdd}>
            Push
          </Button>
        </div>
        <List data={arr} onClick={handleRemove} />
      </SectionContainer>

      <PageHeading title="Styled Component Transition" />
      <SectionContainer name="Styled Component Transition state Keyframes">
        <h2>Styled Component Transition state Keyframes</h2>
        <div style={{ margin: 'auto', textAlign: 'center' }}>
          <Button color="purple" onClick={handleAddStyled}>
            Style Push
          </Button>
          <StyledCompList data={styleData} onClick={handleRemoveStyled} />
        </div>
      </SectionContainer>
    </>
  );
};

export default TransitionPage;
