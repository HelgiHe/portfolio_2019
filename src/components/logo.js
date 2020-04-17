import React from 'react';
import styled from '@emotion/styled';
import image from '../../assets/hh_logo.png';
import { colors } from '../theme';

const Logo = () => {
  return (
    <Wrapper>
      <img src={image} alt="logo" />
    </Wrapper>
  );
};

export default Logo;

const Wrapper = styled.div`
  height: 5em;
  width: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background-color: ${colors.labelColor};
`;
