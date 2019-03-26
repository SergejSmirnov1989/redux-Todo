import React from 'react';
import PropTypes from 'prop-types';
import assignPropTypes from 'assign-prop-types';
import { connect } from 'react-redux';
import Item from '../Item';
import style from './item.module.css';

export default connect(state => ({
  items: state.items,
  sortBy: state.sortBy,
}))(
  assignPropTypes({
    item: PropTypes.object,
    sortBy: PropTypes.string,
  })(({ items, match, sortBy }) => {
    const showItems = () => {
      const { params } = match;

      items.sort((a, b) => {
        if (a[sortBy] > b[sortBy]) return 1;
        if (a[sortBy] < b[sortBy]) return -1;
      });

      if (!params.hasOwnProperty('id')) {
        return items;
      }

      return items.filter(item => item.status === match.params.id);
    };

    const body = arr => {
      if (!arr.length) return <div>Тут ни чего нет</div>;

      return arr.map(item => <Item key={item.id} id={item.id} />);
    };
    return <div className={style.wrapper}>{body(showItems())}</div>;
  }),
);
