import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './nav.module.css';

export default () => {
  return (
    <nav className={style.nav}>
      <NavLink className={style.logo} to="/">
        TODO-шка
      </NavLink>
      <NavLink className={style.link} activeClassName={style.active} to="/new-item">
        Новая заметка
      </NavLink>
      <NavLink className={style.link} activeClassName={style.active} to="/items">
        ХЗ как назвать
      </NavLink>
    </nav>
  );
};
