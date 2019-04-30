import React, { useState } from 'react';
import { css } from 'emotion';

import Loader from '../loader';

const WebPages = ({ webPages }) => {
  const [showApp, setVisibility] = useState(false);
  const [showSpinner, setSpinner] = useState(true);
  if (showSpinner) {
    // show spinner
    window.setTimeout(() => {
      setSpinner(false);
    }, 850);
  }
  if (!showSpinner) {
    window.setTimeout(() => {
      setVisibility(true);
    }, 100);
  }
  if (showSpinner) {
    return <Loader />;
  }

  return (
    <div
      className={css`
        display: flex;
        flex-wrap: wrap;
        transition: opacity 750ms cubic-bezier(0.42, 0.095, 0.24, 0.91);
        opacity: ${showApp ? 1 : 0};
        justify-content: center;
      `}
    >
      {webPages.map(web => {
        return (
          <div
            key={web.sys.id}
            className={css`
          background-image: url('https:${
            web.fields.mainImage.fields.file.url
          }');
          background-size: cover; 
          background-position: center center; 
          height: 15em;
          width: 20em;
          margin: 0 4em 0 0; 
        `}
          />
        );
      })}
    </div>
  );
};

export default WebPages;
