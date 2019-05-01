import React, { useState } from 'react';
import { css } from 'emotion';

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
  );
};

export default Misc;
