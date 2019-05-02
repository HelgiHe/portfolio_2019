import React, { useState, useEffect } from 'react';
import * as contentful from 'contentful';
import { css } from 'emotion';
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
  const [showApp, setVisibility] = useState(false);
  const [loading, setLoading] = useState(true);

  if (!showApp) {
    // show spinner
    window.setTimeout(() => {
      setVisibility(true);
    }, 150);
  }
  console.log(about);
  useEffect(() => {
    if (loading) {
      client
        .getEntry(keys.aboutId)
        .then(function(entry) {
          // logs the entry metadata
          // console.log(entry);
          setAbout(documentToHtmlString(entry.fields.description));
        })
        .catch(err => console.log(err));
    }
    setLoading(false);
  });

  if (loading) {
    return (
      <div
        className={css`
          display: flex;
          justify-content: center;
        `}
      >
        <Loader
          className={css`
            margin-top: 8em;
          `}
        />
      </div>
    );
  }
  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 70%;
        margin: auto;
        line-height: 22px;
      `}
    >
      <h3
        className={css`
          margin-top: 8em;
          margin-bottom: 2em;
          font-size: 1.3em;
        `}
      >
        About Me
      </h3>
      <ReactMarkdown source={about} escapeHtml={false} />
      <a
        href="mailto: helgihel@gmail.com"
        className={css`
          margin-top: 1em;
        `}
      >
        Contact
      </a>
    </div>
  );
};

export default About;
