import React, { Fragment } from 'react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { css } from 'emotion';
import ReactMarkdown from 'react-markdown';

const Detail = props => {
  const { content, link } = props.location.state;
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        width: 70%;
        margin: auto;
      `}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h3
          className={css`
            margin-top: 8em;
            margin-bottom: 2em;
            font-size: 1.3em;
          `}
        >
          {content.fields.title}
        </h3>
      </a>
      <ReactMarkdown
        className={css`
          font-family: Quicksand;
        `}
        source={documentToHtmlString(content.fields.summary)}
        escapeHtml={false}
      />
    </div>
  );
};

export default Detail;
