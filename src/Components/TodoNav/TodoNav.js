/* eslint-disable react/require-default-props */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './nav.module.css';

const TodoNav = ({ search, handleStartSearch, handleValueChange }) => {
  return (
    <nav className={style.nav}>
      <NavLink className={style.logo} to="/">
        TODO-шка
      </NavLink>
      <NavLink className={style.link} activeClassName={style.active} to="/new-item">
        Новая запись
      </NavLink>
      <NavLink className={style.link} activeClassName={style.active} to="/items">
        Записи
      </NavLink>
      <input
        className={style.search}
        type="text"
        value={search}
        onChange={handleValueChange}
        onKeyDown={handleStartSearch}
      />
    </nav>
  );
};

TodoNav.propTypes = {
  search: PropTypes.string,
  handleStartSearch: PropTypes.func,
  handleValueChange: PropTypes.func,
};

export default TodoNav;
