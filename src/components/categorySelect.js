import React from 'react';
import { css } from 'emotion';
import Button from './button';

const CategorySelect = ({ selectCategory }) => {
  return (
    <div
      className={css`
        width: 80%;
        margin: auto;
        display: flex;
        justify-content: space-around;
        margin-bottom: 4em;
      `}
    >
      <Button text="Web" onClick={() => selectCategory('webPages')} />
      <Button text="Apps" onClick={() => selectCategory('apps')} />
      <Button text="Misc" onClick={() => selectCategory('misc')} />
    </div>
  );
};

export default CategorySelect;
