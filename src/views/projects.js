import React, { useState } from 'react';
import { css } from 'emotion';

import Apps from '../components/projects/apps';
import CategorySelect from '../components/categorySelect';

const Projects = ({ apps, webPages }) => {
  const [selectedCategory, setCategory] = useState('webPages');
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
      <CategorySelect
        selectCategory={setCategory}
        selectedCategory={selectedCategory}
      />
      <div
        className={css`
          display: flex;
        `}
      >
        <Apps apps={apps} />
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
