import React from 'react';
import Button from '../components/button';
import { css } from 'emotion';
import Particles from 'react-particles-js';
import { navigate } from '@reach/router';

const Home = () => {
  return (
    <div
      className={css`
        height: 100vh;
        width: 100%;
      `}
    >
      <Particles
        className={css`
          height: 100vh;
          width: 100%;
          position: absolute;
        `}
        params={{
          particles: {
            number: {
              value: 70,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
            },
          },
        }}
      />
      <div
        className={css`
          position: absolute;
          left: 40%;
          top: 35%;
          width: 20em;
          height: 10em;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
        `}
      >
        <Button
          text="Projects"
          onClick={() => navigate('/projects')}
          className={css`
            height: 2em;
            width: 10em;
            font-size: 1.1em;
          `}
        />
        <a href="https://github.com/HelgiHe'">
          <Button
            text="Github"
            className={css`
              height: 2em;
              width: 10em;
              font-size: 1.1em;
            `}
          />
        </a>
        <a href="mailto: helgihel@gmail.com">
          <Button
            text="Contact"
            className={css`
              height: 2em;
              width: 10em;
              font-size: 1.1em;
            `}
          />
        </a>
      </div>
    </div>
  );
};

export default Home;
