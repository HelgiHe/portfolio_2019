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
          justify-content: space-around;
        `}
      >
        {other.map(item => {
          return (
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            <a
              key={item.sys.id}
              href={item.fields.link}
              target="_blank"
              rel="noopener noreferrer"
              className={css`
        background-image: url('https:${item.fields.mainImage.fields.file.url}');
        background-size: cover; 
        position: relative;
          background-size: cover; 
          background-position: center center; 
          height: 15em;
          width: 20em;
          margin: 0 4em 0 0;
          transition: 0.18s ease-out;
          z-index: 1;
          &:after {
             transition: 0.18s ease-out;
             content: '${item.fields.title}';
             position: absolute;
             background-color: rgba(0,0,0,0);;
             top: 0;
             right: 0;
             bottom: 0;
             left: 0;
             z-index: 100;
             display: flex;
             align-items: center;
             justify-content: center;
             height: 60%;
             width: 100%;
             opacity: 0;
             transform: translateY(90%);
             border-radius: 2px;
            }
          &:hover {

         &:after {
          background-color: rgba(0,0,0,0.3);
          opacity: 1;
          transform: translateY(66.5%);
        }
      }
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
