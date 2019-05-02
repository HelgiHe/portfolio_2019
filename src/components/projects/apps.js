import React, { Fragment, useState } from 'react';
import { css } from 'emotion';

import Loader from '../loader';

const Apps = ({ apps }) => {
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
          flex-wrap: wrap;
          transition: opacity 680ms cubic-bezier(0.42, 0.095, 0.24, 0.91);
          opacity: ${showApp ? 1 : 0};
        `}
      >
        {apps.map(app => {
          return (
            <div
              key={app.sys.id}
              className={css`
        background-image: url('https:${app.fields.mainImage.fields.file.url}');
        background-size: cover; 
        background-position: center center; 
        height: 20em;
        width: 15em;
        margin-right: 30px;
      `}
            />
          );
        })}
      </div>
      {showSpinner && (
        <div
          className={css`
            position: absolute;
            left: 45%;
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

export default Apps;
