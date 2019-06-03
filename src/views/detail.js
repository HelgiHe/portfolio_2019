import React from 'react';
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
        @media (max-width: 720px) {
          width: 90%;
        }
      `}
    >
      <h3
        className={css`
          margin-top: 8em;
          margin-bottom: 2em;
          font-size: 1.3em;
        `}
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          {content.fields.title}{' '}
        </a>
      </h3>

      <ReactMarkdown
        className={css`
          font-family: Quicksand;
        `}
        source={documentToHtmlString(content.fields.summary)}
        escapeHtml={false}
      />
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div
          className={css`
           position: relative;
            background-image: url('https:${
              content.fields.mainImage.fields.file.url
            }');

           background-size: cover; 
           background-position: center center; 
           margin: 25px auto;
           height: ${content.fields.type === 'app' ? '20em' : '15em'};
          width: ${content.fields.type === 'app' ? '15em' : '20em'};`}
        />
      </a>
    </div>
  );
};

export default Detail;
