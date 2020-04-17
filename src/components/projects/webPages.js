import React, { Fragment, useState } from 'react';
import { navigate } from '@reach/router';
import styled from '@emotion/styled';
import Loader from '../loader';

const WebPages = ({ webPages }) => {
  const [showApp, setVisibility] = useState(false);
  const [showSpinner, setSpinner] = useState(true);

  const selectWebPage = (web) => {
    navigate(`detail/${web.sys.id}`, {
      state: {
        content: web,
        link: web.fields.link,
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
      <WebGroup showApp={showApp}>
        {webPages.map((web) => {
          return (
            <WebWrapper
              key={web.sys.id}
              role="button"
              tabIndex="0"
              onKeyDown={(e) => (e.keyCode === 13 ? selectWebPage(web) : null)}
              onClick={() => selectWebPage(web)}
              web={web}
            />
          );
        })}
      </WebGroup>
      {showSpinner && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
    </Fragment>
  );
};

export default WebPages;

const LoaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  top: 37%;
`;

const WebGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  transition: opacity 680ms cubic-bezier(0.42, 0.095, 0.24, 0.91);
  opacity: ${({ showApp }) => (showApp ? 1 : 0)};
  justify-content: space-around;
`;

const WebWrapper = styled.div`
        background-image: ${({ web }) =>
          `url(https:${web.fields.mainImage.fields.file.url})`};
        background-size: cover; 
        position: relative;
          background-size: cover; 
          background-position: center center; 
          height: 15em;
          width: 20em;
          margin-top: 2em;
          flex-shrink: 0;
          transition: 0.18s ease-out;
          z-index: 1;
          &:after {
             transition: 0.18s ease-out;
             content: '${({ web }) => web.fields.title}';
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
      `;
