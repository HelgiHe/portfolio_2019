import React from 'react';
import styled from '@emotion/styled';
import Button from './button';

const CategorySelect = ({ selectCategory }) => {
  return (
    <ButtonContainer>
      <Button text="Web" onClick={() => selectCategory('webPages')} />
      <Button text="Apps" onClick={() => selectCategory('apps')} />
      <Button text="Misc" onClick={() => selectCategory('misc')} />
    </ButtonContainer>
  );
};

export default CategorySelect;

const ButtonContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  margin-bottom: 4em;
`;
