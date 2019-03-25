import React from 'react';
import PropTypes from 'prop-types';
import assignPropTypes from 'assign-prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ItemListNav from './ItemListNav';
import ItemsFilter from '../ItemsFilter';
import style from './item-list.module.css';

export default connect(state => ({ items: state.items }))(
  assignPropTypes({
    match: PropTypes.object,
  })(({ match }) => {
    return (
      <div className={style['item-list']}>
        <ItemListNav match={match} />
        <Route path={`${match.path}`} component={ItemsFilter} exact />
        <Route path={`${match.path}/:id`} component={ItemsFilter} />
      </div>
    );
  }),
);
