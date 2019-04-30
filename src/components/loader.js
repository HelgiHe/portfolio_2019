import React from 'react';
import { css, keyframes } from 'emotion';

const base = css`
   {
    position: absolute;
    top: 27px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #76c3e2;
    animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

const spinner1 = keyframes`
   from, 0% {
    transform: scale(0);
    opacity: 0;
  }
  to, 100%{
    transform: scale(1);
    opacity: 1;
  }
`;

const spinner2 = keyframes`
   from, 0% {
    transform: translate(0, 0);
  }
  to, 100% {
    transform: translate(19px, 0);
  }
`;

const spinner3 = keyframes`
   from, 0%{
    transform: scale(1);
    opacity: 1;
  }
  to, 100% {
    transform: scale(0);
    opacity: 0;
  }
`;

const Loader = () => {
  return (
    <div
      className={css`
        width: 100%;
        margin: 4em auto;
        display: inline-block;
        position: relative;
        width: 64px;
        height: 64px;
      `}
    >
      <div
        className={css`
          ${base}
          left: 6px;
          animation: ${spinner1} 0.6s infinite;
        `}
      />
      <div
        className={css`
          ${base}
          left: 6px;
          animation: ${spinner2} 0.6s infinite;
        `}
      />
      <div
        className={css`
          ${base}
          left: 26px;
          animation: ${spinner2} 0.6s infinite;
        `}
      />
      <div
        className={css`
          ${base}
          left: 45px;
          animation: ${spinner3} 0.6s infinite;
        `}
      />
    </div>
  );
};

export default Loader;
