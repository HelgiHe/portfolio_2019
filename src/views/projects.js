import React, { useState } from 'react';
import { css } from 'emotion';

import Apps from '../components/projects/apps';
import Webpages from '../components/projects/webPages';
import Misc from '../components/projects/misc';
import CategorySelect from '../components/categorySelect';

const Projects = ({ apps, webPages, other }) => {
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
          margin: 6em auto 3em auto;
        `}
      >
        Projects
      </h2>
      <CategorySelect
        selectCategory={setCategory}
        selectedCategory={selectedCategory}
      />
      {selectedCategory === 'apps' && <Apps apps={apps} />}
      {selectedCategory === 'webPages' && <Webpages webPages={webPages} />}
      {selectedCategory === 'misc' && <Misc other={other} />}
    </div>
  );
};

export default Projects;
