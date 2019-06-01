import React, { Fragment, useState } from 'react';
import { navigate } from '@reach/router';
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
          justify-content: center;
          transition: opacity 680ms cubic-bezier(0.42, 0.095, 0.24, 0.91);
          opacity: ${showApp ? 1 : 0};
        `}
      >
        {apps.map(app => {
          return (
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            <div
              key={app.sys.id}
              href={app.fields.link}
              onClick={() => {
                navigate(`detail/${app.sys.id}`, {
                  state: {
                    content: app,
                    link: app.fields.link,
                  },
                });
              }}
              className={css`
        background-image: url('https:${app.fields.mainImage.fields.file.url}');
              position: relative;
          background-size: cover; 
          background-position: center center; 
          height: 20em;
          width: 15em;
          transition: 0.18s ease-out;
          z-index: 1;
          &:after {
             transition: 0.18s ease-out;
             content: '${app.fields.title}';
             position: absolute;
             background-color: rgba(0,0,0,0);;
             top: 0;
             right: 0;
             bottom: 0;
             left: 20%;
             z-index: 100;
             display: flex;
             align-items: center;
             justify-content: center;
             height: 60%;
             width: 50%;
             opacity: 0;
             transform: translateY(90%);
             border-radius: 5px;
            }
          &:hover {

         &:after {
          background-color: rgba(0,0,0,0.5);
          opacity: 1;
          transform: translateY(45%);
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

export default Apps;
