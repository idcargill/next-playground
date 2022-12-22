import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: JSX.Element | string;
  color: string;
  onClick: () => void;
}

const StyledButton = styled.button`
  color: ${props => props.color || 'blue'};
  background-color: ${props => props.color ? 'black' : 'blue'};
  padding: 12px;
  margin: 10px;
  font-size: 2em;
  border: 1px solid red;
  border-radius: 5px;
`


const Button = ({ children, color,  onClick }: ButtonProps) => (
  <StyledButton onClick={onClick} color={color}>{children}</StyledButton>
)

export default Button;
