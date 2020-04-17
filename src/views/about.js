import React, { useState, useEffect } from 'react';
import * as contentful from 'contentful';
import { css } from 'emotion';
import styled from '@emotion/styled';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import ReactMarkdown from 'react-markdown';

import Loader from '../components/loader';
import keys from '../keys';

const client = contentful.createClient({
  space: keys.space,
  accessToken: keys.accessToken,
});

const About = () => {
  const [about, setAbout] = useState('');

  const fetchContent = async () => {
    await client
      .getEntry(keys.aboutId)
      .then(function (entry) {
        setAbout(documentToHtmlString(entry.fields.description));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchContent();
  }, [about]);

  if (!about) {
    return (
      <LoaderWrapper>
        <Loader
          className={css`
            margin-top: 15em;
          `}
        />
      </LoaderWrapper>
    );
  }
  return (
    <ContentWrapper>
      <Title>About Me</Title>
      <ArticleWrapper>
        <ReactMarkdown source={about} escapeHtml={false} />
      </ArticleWrapper>
    </ContentWrapper>
  );
};

export default About;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 70%;
  margin: auto;
  line-height: 22px;
`;

const Title = styled.h3`
  margin-top: 8em;
  margin-bottom: 2em;
  font-size: 1.3em;
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ArticleWrapper = styled.article`
  font-family: Quicksand;
`;
