import React from 'react';
import { Link } from '@reach/router';

const NavLink = ({ toSite, children }) => {
  return <Link to={`${toSite}`}>{children}</Link>;
};

export default NavLink;
