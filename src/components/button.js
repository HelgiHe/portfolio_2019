import React from 'react';
import { css } from 'emotion';

const base = css`
  position: relative;
  width: 80px;
  background-color: #000;
  display: block;
  overflow: hidden;
  height: 25px;
  color: #fff;
  &:before {
    transition: 2.5s ease-in-out;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #fff;
    transform: translateX(-100%);
  }
  &:hover {
    color: color: #000;

    &:before {
      transform: translateX(0);
    }
  }
`;

const Button = ({ onClick, isSelected, text }) => {
  return (
    <button
      className={
        !isSelected
          ? css`
              ${base};
              display: flex;
              justify-content: center;
              font-size: 12px;
              background-color: rgba(0, 0, 0, 0);
              color: #fff;
              border-radius: 5px;
            `
          : css`
              ${base};
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
