import React from 'react';
import { css } from 'emotion';
import Button from './button';

const CategorySelect = () => {
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
      <Button text="Web" onClick={() => {}} />
      <Button text="Apps" onClick={() => {}} />
      <Button text="Misc" onClick={() => {}} />
    </div>
  );
};

export default CategorySelect;
