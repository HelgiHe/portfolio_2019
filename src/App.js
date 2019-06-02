import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';
import { css } from 'emotion';
import * as contentful from 'contentful';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-114305695-1');

import Projects from './views/projects';
import Home from './views/home';
import About from './views/about';
import Detail from './views/detail';

import Loader from './components/loader';
import Logo from './components/logo';
import NavBar from './components/navbar';

import keys from './keys';
import { colors } from './theme';

const client = contentful.createClient({
  space: keys.space,
  accessToken: keys.accessToken,
});

const App = () => {
  const [projects, setProjects] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    await client.getEntries().then(entries => {
      const items = entries.items.reduce((prev, item) => {
        const { type } = item.fields;
        if (!prev[type]) {
          prev[type] = [item];
        } else {
          prev[type] = [...prev[type], item];
        }
        return prev;
      }, {});
      setProjects(items);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchProjects();
    ReactGA.initialize('UA-114305695-1');
  }, []);

  if (loading) {
    return (
      <div
        className={css`
          height: 100vh;
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          color: ${colors.fontColor};
          background-color: ${colors.mainColor};
        `}
      >
        <Loader />
      </div>
    );
  }
  return (
    <div
      className={css`
        min-height: 100vh;
        height: 100%;
        width: 100vw;
        color: ${colors.fontColor};
        background-color: ${colors.mainColor};
        font-family: Oswald, Helvetica, sans-serif;
        letter-spacing: 0.1em;
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: row;
          position: fixed;
          z-index: 5;
        `}
      >
        <Logo />
        <NavBar />
      </div>
      <Router>
        <Home path="/" />
        <Detail path="detail/:id" />
        <Projects
          path="projects"
          apps={projects.app}
          webPages={projects.webPage}
          other={projects.misc}
        />

        <About path="about" />
      </Router>
    </div>
  );
};

export default App;
