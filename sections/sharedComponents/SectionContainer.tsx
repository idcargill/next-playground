import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  border: 1px solid green;
  margin: 10px 5px;
  padding: 10px;
  background-color: #555555;
  border-radius: 5px;
`

interface SectionContainerProps {
  children: JSX.Element | JSX.Element[];
}

const SectionContainer = ({ children }: SectionContainerProps) => (
  <StyledContainer>
    {children}
  </StyledContainer>
)

export default SectionContainer;
