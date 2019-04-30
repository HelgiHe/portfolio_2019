import React, { useState } from 'react';
import { css } from 'emotion';

import Loader from '../loader';

const Misc = ({ other }) => {
  const [showApp, setVisibility] = useState(false);

  if (!showApp) {
    // show spinner
    window.setTimeout(() => {
      setVisibility(true);
    }, 150);
  }
  return (
    <div
      className={css`
        display: flex;
        transition: opacity 680ms cubic-bezier(0.23, 1, 0.32, 1);
        opacity: ${showApp ? 1 : 0};
      `}
    >
      <Loader />
    </div>
  );
};

export default Misc;
