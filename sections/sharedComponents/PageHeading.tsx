import React from 'react';
import styled from 'styled-components';


const HeadingStyle = styled.div`
  width: 100vw;
  text-align: center;
  font-size: 2em;
  height: 100px;
  background-color: #000000;
  color: #ffffff;
  padding: 20px 0px 0px;
`

interface PageHeadingProps {
  title: string;
}

const PageHeading = ({ title }:PageHeadingProps ) => (
  <HeadingStyle>
    {title}
  </HeadingStyle>
)

export default PageHeading;
