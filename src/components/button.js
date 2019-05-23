import React from 'react';
import { css } from 'emotion';

const base = css`
  position: relative;
  width: 80px;
  display: block;
  overflow: hidden;
  height: 25px;
  color: #fff;
  transition: 0.18s ease-in-out;
  z-index: 1;
  &:hover {
     color: #000;
  }
  &:before {
    transition: 0.18s ease-in;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -100;
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

const Button = ({ onClick, isSelected, text, className }) => {
  return (
    <button
      className={
        !isSelected
          ? css`
              ${base};
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 12px;
              background-color: rgba(0, 0, 0, 0);
              color: #fff;
              border-radius: 5px;
              border: solid 1px #fff;
              ${className}
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
