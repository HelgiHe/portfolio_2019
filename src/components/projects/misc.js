import React, { Fragment, useState } from 'react';
import { css } from 'emotion';

import Loader from '../loader';

const Misc = ({ other }) => {
  const [showApp, setVisibility] = useState(false);
  const [showSpinner, setSpinner] = useState(true);
  if (showSpinner) {
    window.setTimeout(() => {
      setSpinner(false);
    }, 850);
  }
  if (!showSpinner) {
    window.setTimeout(() => {
      setVisibility(true);
    }, 50);
  }

  return (
    <Fragment>
      <div
        className={css`
          display: flex;
          transition: opacity 680ms cubic-bezier(0.42, 0.095, 0.24, 0.91);
          opacity: ${showApp ? 1 : 0};
        `}
      >
        {other.map(item => {
          return (
            <div
              key={item.sys.id}
              className={css`
        background-image: url('https:${item.fields.mainImage.fields.file.url}');
        background-size: cover; 
        background-position: center center; 
        border-radius: 2px;
        height: 15em;
        width: 23em;
        margin: 0 4em 0 0; 
      `}
            />
          );
        })}
      </div>
      {showSpinner && (
        <div
          className={css`
            position: absolute;
            left: 48%;
            top: 37%;
            height: 100vh;
            width: 100vw;
          `}
        >
          <Loader />
        </div>
      )}
    </Fragment>
  );
};

export default Misc;
