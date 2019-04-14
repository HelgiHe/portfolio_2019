import React from 'react';
import { css } from 'emotion';

const Projects = ({ apps, webPages }) => {
  return (
    <div
      className={css`
        max-width: 1200px;
        margin: auto;
        display: flex;
        flex-direction: column;
      `}
    >
      <h2
        className={css`
          font-size: 1.2em;
          margin: 2em auto;
        `}
      >
        Projects
      </h2>
      <div
        className={css`
          display: flex;
        `}
      >
        <h2
          className={css`
            transform: rotate(-90deg);
            transform-origin: left top 0;
            margin-top: 12%;
            font-size: 2em;
          `}
        >
          Apps
        </h2>
        {apps.map(app => {
          return (
            <div
              key={app.sys.id}
              className={css`
              background-image: url('https:${
                app.fields.mainImage.fields.file.url
              }');
              background-size: cover; 
              background-position: center center; 
              height: 20em;
              width: 15em;
            `}
            />
          );
        })}
      </div>
      <div
        className={css`
          display: flex;
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
            `}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
