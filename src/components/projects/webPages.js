import React, { Fragment, useState } from 'react';
import { navigate } from '@reach/router';
import { css } from 'emotion';

import Loader from '../loader';

const WebPages = ({ webPages }) => {
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
          transition: opacity 750ms cubic-bezier(0.42, 0.095, 0.24, 0.91);
          opacity: ${showApp ? 1 : 0};
          justify-content: space-around;
        `}
      >
        {webPages.map(web => {
          return (
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            <div
              key={web.sys.id}
              onClick={() => {
                navigate(`detail/${web.sys.id}`, {
                  state: {
                    content: web,
                    link: web.fields.link,
                  },
                });
              }}
              className={css`
          background-image: url('https:${
            web.fields.mainImage.fields.file.url
          }');
          position: relative;
          background-size: cover; 
          background-position: center center; 
          height: 15em;
          width: 20em;
          transition: 0.18s ease-out;
          z-index: 1;
          &:after {
             transition: 0.18s ease-out;
             content: '${web.fields.title}';
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
          transform: translateY(50%);
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
            width: 100%;
            display: flex;
            justify-content: center;
            top: 37%;
          `}
        >
          <Loader />
        </div>
      )}
    </Fragment>
  );
};

export default WebPages;
