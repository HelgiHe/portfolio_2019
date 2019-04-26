import React from 'react';
import { css } from 'emotion';

import CategorySelect from '../components/categorySelect';

const Projects = ({ apps, webPages }) => {
  console.log(apps);
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
      <CategorySelect />
      <div
        className={css`
          display: flex;
        `}
      >
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
