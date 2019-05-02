import React from 'react';
import { MdHome, MdInfoOutline, MdDevices } from 'react-icons/md';
import { TweenMax, Back } from 'gsap/TweenMax';
import { css } from 'emotion';

import NavLink from './navLink';
import { colors } from '../theme';

const iconStyles = css`
  height: 2em;
  width: 2em;
`;

class navBar extends React.Component {
  constructor(props) {
    super(props);
    this.navEl = null;
    this.tween = null;
  }

  componentDidMount() {
    this.showNav();
  }

  showNav() {
    this.tween = TweenMax.from(this.navEl, 0.7, {
      opacity: '0',
      width: '0px',
      ease: Back.easeInOut,
      delay: 0.1,
    });
  }

  render() {
    return (
      <nav
        ref={nav => (this.navEl = nav)}
        className={css`
          background-color: ${colors.secondaryColor};
          width: 20em;
          height: 3em;
          display: flex;
          justify-content: space-around;
          align-items: center;
          z-index: 4;
          opacity: 1;
        `}
      >
        <NavLink toSite="/">
          <MdHome
            color={colors.fontColor}
            className={css`
              ${iconStyles}
            `}
          />
        </NavLink>
        <NavLink toSite="projects">
          <MdDevices
            color={colors.fontColor}
            className={css`
              ${iconStyles}
            `}
          />
        </NavLink>
        <NavLink toSite="about">
          <MdInfoOutline
            color={colors.fontColor}
            className={css`
              ${iconStyles}
            `}
          />
        </NavLink>
      </nav>
    );
  }
}

export default navBar;
