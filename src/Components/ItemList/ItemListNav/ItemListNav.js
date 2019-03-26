import React from 'react';
import PropTypes from 'prop-types';
import assignPropTypes from 'assign-prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { sortBy } from '../../../action';
import style from './nav.module.css';

export default connect(
  state => ({
    activeCount: state.items.filter(item => item.status === 'active').length,
    completeCount: state.items.filter(item => item.status === 'complete').length,
    expiredCount: state.items.filter(item => item.status === 'expired').length,
    count: state.items.length,
  }),
  { sortBy },
)(
  assignPropTypes({
    match: PropTypes.object,
    activeCount: PropTypes.number,
    completeCount: PropTypes.number,
    expiredCount: PropTypes.number,
    count: PropTypes.number,
  })(({ match, count, activeCount, completeCount, expiredCount, sortBy }) => {
    const changeSortBy = e => {
      sortBy(e.target.value);
    };

    return (
      <nav className={style.nav}>
        <NavLink
          className={style.link}
          activeClassName={style['link-active']}
          to={`${match.url}`}
          exact>
          Все
          <div className={style.counter}>{count}</div>
        </NavLink>
        <NavLink
          className={style.link}
          activeClassName={style['link-active']}
          to={`${match.url}/active`}>
          Активные
          <div className={style.counter}>{activeCount}</div>
        </NavLink>
        <NavLink
          className={style.link}
          activeClassName={style['link-active']}
          to={`${match.url}/complete`}>
          Выполненые
          <div className={style.counter}>{completeCount}</div>
        </NavLink>
        <NavLink
          className={style.link}
          activeClassName={style['link-active']}
          to={`${match.url}/expired`}>
          Просроченные)))
          <div className={style.counter}>{expiredCount}</div>
        </NavLink>
        <select className={`${style.link} ${style.select}`} onChange={changeSortBy}>
          <option className={style.select_link} value="createdAt">
            по дате создания
          </option>
          <option className={style.select_link} value="selectedDay">
            по deadline
          </option>
        </select>
      </nav>
    );
  }),
);
