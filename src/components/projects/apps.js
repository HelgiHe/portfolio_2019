import React, { Fragment, useState } from 'react';
import { navigate } from '@reach/router';
import { css } from 'emotion';
import styled from '@emotion/styled';

import Loader from '../loader';

const Apps = ({ apps }) => {
  const [showApp, setVisibility] = useState(false);
  const [showSpinner, setSpinner] = useState(true);

  const selectApp = (app) => {
    navigate(`detail/${app.sys.id}`, {
      state: {
        content: app,
        link: app.fields.link,
      },
    });
  };

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
      <AppGroup showApp={showApp}>
        {apps.map((app) => {
          return (
            <AppWrapper
              key={app.sys.id}
              href={app.fields.link}
              role="button"
              tabIndex="0"
              onKeyDown={(e) => (e.keyCode === 13 ? selectApp(app) : null)}
              onClick={() => selectApp(app)}
              app={app}
            />
          );
        })}
      </AppGroup>
      {showSpinner && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
    </Fragment>
  );
};

export default Apps;

const LoaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  top: 37%;
`;

const AppGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  transition: opacity 680ms cubic-bezier(0.42, 0.095, 0.24, 0.91);
  opacity: ${({ showApp }) => (showApp ? 1 : 0)};
  justify-content: space-around;
`;

const AppWrapper = styled.div`
background-image: ${({ app }) =>
  `url(https:${app.fields.mainImage.fields.file.url})`};
        background-size: cover; 
        position: relative;
          background-size: cover; 
          background-position: center center; 
          height: 20em;
          width: 15em;
          margin-top: 2em;
          flex-shrink: 0;
          transition: 0.18s ease-out;
          z-index: 1;
          &:after {
             transition: 0.18s ease-out;
             content: '${({ app }) => app.fields.title}';
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
             border-radius: 2px;
            }
          &:hover {

         &:after {
          background-color: rgba(0,0,0,0.3);
          opacity: 1;
          transform: translateY(45%);
        }
      }

`;
