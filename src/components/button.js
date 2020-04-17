import React from 'react';
import { css, cx } from 'emotion';
import styled from '@emotion/styled';

const Button = ({ onClick, isSelected, text, className }) => {
  return (
    <StyledButton
      className={
        !isSelected
          ? cx(
              css`
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 12px;
                background-color: rgba(0, 0, 0, 0);
                color: #fff;
                border-radius: 5px;
                border: solid 1px #fff;
              `,
              className,
            )
          : css`
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
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
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
}`;
