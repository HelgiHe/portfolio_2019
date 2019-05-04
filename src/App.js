import React, { useState } from 'react';
import { Router } from '@reach/router';
import { css } from 'emotion';
import * as contentful from 'contentful';

import Projects from './views/projects';
import Home from './views/home';
import About from './views/about';

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
  const [apps, setApps] = useState([]);
  const [webPages, setwebPages] = useState([]);
  const [miscs, setMisc] = useState([]);
  const [loading, setLoading] = useState(true);
  if (loading) {
    client.getEntries().then(entries => {
      const mobileApps = entries.items.filter(
        entry => entry.fields.type === 'app',
      );
      const webs = entries.items.filter(
        entry => entry.sys.contentType.sys.id === 'webPage',
      );
      const misc = entries.items.filter(entry => entry.fields.type === 'misc');
      setwebPages(webs);
      setApps(mobileApps);
      setMisc(misc);
      setLoading(false);
    });
  }
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
        <Projects
          path="projects"
          apps={apps}
          webPages={webPages}
          other={miscs}
        />
        <About path="about" />
      </Router>
    </div>
  );
};

export default App;
