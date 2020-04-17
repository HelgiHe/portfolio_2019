import React from 'react';
import Button from '../components/button';
import { css } from 'emotion';
import styled from '@emotion/styled';
import Particles from 'react-particles-js';
import { navigate } from '@reach/router';

const Home = () => {
  return (
    <Container>
      <ParticleWrapper
        params={{
          particles: {
            number: {
              value: 25,
            },
            size: {
              value: 3,
            },
            move: {
              enable: true,
              speed: 1.4,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
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
      <ButtonWrapper>
        <StyledButton text="Projects" onClick={() => navigate('/projects')} />
        <StyledButton text="About" onClick={() => navigate('/about')} />
        <a href="https://github.com/HelgiHe">
          <StyledButton text="Github" />
        </a>
        <a href="mailto: helgihel@gmail.com">
          <StyledButton text="Contact" />
        </a>
      </ButtonWrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

const ParticleWrapper = styled(Particles)`
  height: 100vh;
  width: 100%;
  position: absolute;
`;

const ButtonWrapper = styled.div`
  margin: auto;
  padding-top: 35vh;
  width: 20em;
  height: 10em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledButton = styled(Button)`
  height: 2em;
  width: 10em;
  font-size: 1.1em;
  margin-bottom: 5px;
`;
