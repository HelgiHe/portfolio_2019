import React from 'react';
import { css } from 'emotion';

const Button = ({ onClick, isSelected, text }) => {
  return (
    <button
      className={
        !isSelected
          ? css`
              width: 80px;
              height: 25px;
              display: flex;
              justify-content: center;
              font-size: 12px;
              background-color: rgba(0, 0, 0, 0);
              color: #fff;
              border-radius: 5px;
            `
          : css`
              width: 80px;
              height: 28px;
              display: flex;
              color: #000;
              justify-content: center;
              background-color: rgba(255, 255, 255, 0);
              border: solid 1px #fff;
            `
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
