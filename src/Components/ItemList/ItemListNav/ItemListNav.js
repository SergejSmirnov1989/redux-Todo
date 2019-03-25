import React from 'react';
import PropTypes from 'prop-types';
import assignPropTypes from 'assign-prop-types';
import { NavLink } from 'react-router-dom';
import style from './nav.module.css';

export default assignPropTypes({
  match: PropTypes.object,
})(({ match }) => {
  return (
    <nav className={style.nav}>
      <NavLink className={style.link} to={`${match.url}/active`}>
        active
      </NavLink>
      <NavLink className={style.link} to={`${match.url}/complete`}>
        complete
      </NavLink>
      <NavLink className={style.link} to={`${match.url}/expired`}>
        expired
      </NavLink>
      <NavLink className={style.link} to={`${match.url}`}>
        all
      </NavLink>
    </nav>
  );
});
