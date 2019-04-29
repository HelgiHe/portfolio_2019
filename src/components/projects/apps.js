import React from 'react';
import { css } from 'emotion';

const Apps = ({ apps }) => {
  return apps.map(app => {
    return (
      <div
        key={app.sys.id}
        className={css`
        background-image: url('https:${app.fields.mainImage.fields.file.url}');
        background-size: cover; 
        background-position: center center; 
        height: 20em;
        width: 15em;
      `}
      />
    );
  });
};

export default Apps;
