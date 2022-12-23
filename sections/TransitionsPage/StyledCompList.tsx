import React, { useEffect, useState, useRef, useCallback } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { TransitionGroup, Transition, CSSTransition } from 'react-transition-group';

interface StyledProps {
  data: any[];
  onClick: (idx: number) => void;
}

interface StyleLisItemProps {
  state: any;
}

const StyledList = styled.ul`
  list-style: none;
  text-align: center;
  margin: 10px;
  background-color: #222222
`


const loadKeyfram = keyframes`
  0% { 
      opacity: 0;
      background-color: none;
    }
  50% {
    opacity: 0.5;
    background-color: blue;
  }
  100% {
    opacity: 1;
    background-color: purple;
  }
`

const unloadKeyframe = keyframes`
  0% {
    opacity 1;
    border-radius: 10px;
  }
  100% {
    opacity: 0;
  }
`


const StyledListItem = styled.li<StyleLisItemProps>`
border: 1px solid black;
margin-top: 10px;
padding: 5px;
opacity: 1;
animation-name: ${({state}) => state ? loadKeyfram : unloadKeyframe};
animation-duration: 2s;
animation-interaction-count: 1;
animation-fill-mode: forwards;
` 

interface ListItemProps {
  item: any;
  state: any;
  idx: number;
  onClick: (item: any) => void;
}

const ListItem = ({ item, state, onClick, idx }: ListItemProps) => {
  const [ itemState, setItemState ] = useState(false);
  const [ show, setShow] = useState(true);

  useEffect(() => {
    setItemState(state);
  }, [])

  const handleClick = (item:any) => {
    setItemState(false);
    setTimeout(
      () => {
        console.log(item);
        onClick(item);
        setShow(false);
      }, 2000);
  };

  if (!show) {
    return null;
  }

  return (
    <StyledListItem state={itemState} onClick={() => handleClick(item)}>
      {item}
    </StyledListItem>
  )
}

const StyledCompList = ({ data, onClick }: StyledProps) => {
  console.log(data);
  return (
    <StyledList>
      {data.map((item, idx) => (
        <ListItem key={idx} item={item.item} state={true} onClick={onClick} idx={idx}/>
      ))}
    </StyledList>
  )
}

export default StyledCompList;
