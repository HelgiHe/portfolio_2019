import React from 'react';
import { css } from 'emotion';

import image from '../../assets/hh_logo.png';
import { colors } from '../theme';

const Logo = () => {
  return (
    <div
      className={css`
        height: 5em;
        width: 5em;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        background-color: ${colors.labelColor};
      `}
    >
      <img src={image} alt="logo" />
    </div>
  );
};

export default Logo;
