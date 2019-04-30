import React, { useState } from 'react';
import { css } from 'emotion';

const Apps = ({ apps }) => {
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
      `}
          />
        );
      })}
    </div>
  );
};

export default Apps;
