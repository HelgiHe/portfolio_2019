import React, { useState } from 'react';
import styled from '@emotion/styled';
import Apps from '../components/projects/apps';
import Webpages from '../components/projects/webPages';
import Misc from '../components/projects/misc';
import CategorySelect from '../components/categorySelect';

const Projects = ({ apps, webPages, other }) => {
  const [selectedCategory, setCategory] = useState('webPages');
  return (
    <Wrapper>
      <StyledHeader>Projects</StyledHeader>
      <CategorySelect
        selectCategory={setCategory}
        selectedCategory={selectedCategory}
      />
      {selectedCategory === 'apps' && <Apps apps={apps} />}
      {selectedCategory === 'webPages' && <Webpages webPages={webPages} />}
      {selectedCategory === 'misc' && <Misc other={other} />}
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.h2`
  font-size: 1.2em;
  margin: 6em auto 3em auto;
`;
