import React, { useCallback } from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import css from './list.module.css';

const StyledList = styled.ul`
  list-style: none;
  text-align: center;
`
  
  const StyledListItem = styled.li`
  background-color: #ff5500;
  padding: 10px;
  margin: auto;
  margin-top: 5px;
  max-width: 400px;
  height: 50px;
  border-radius: 10px;
  color: white;
`

interface ListProps {
  data: any[];
  onClick: (idx: number) => void;
}

const enterLog = () => {
  console.log('entering');
};


const List = ({ data, onClick }: ListProps) => {
  return (
    <>
    <StyledList>
      <TransitionGroup>
        {data.map((item, idx) => (
          <CSSTransition 
            as='li'
            key={`${item}`}
            in={data.length > 0}
            timeout={1000}
            onEnter={enterLog}
            mountOnEnter
            unmountOnExit
            classNames={{
              enter: `${css.list_item_enter}`,
              enterActive: `${css.list_item_enter_active}`,
              exit: `${css.list_item_exit}`,
              exitActive: `${css.list_item_exit_active}`,
            }}
            >
            {/* <p onClick={() => onClick(idx)}>hello</p> */}
            <StyledListItem onClick={() => onClick(idx)}>
              {item}
            </StyledListItem>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </StyledList>
    </>
  );
};

export default List;
