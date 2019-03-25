import React from 'react';
import PropTypes from 'prop-types';
import assignPropTypes from 'assign-prop-types';
import { connect } from 'react-redux';
import Item from '../Item';
import style from './item.module.css';

export default connect(state => ({
  items: state.items,
}))(
  assignPropTypes({
    item: PropTypes.object,
  })(({ items, match }) => {
    const showItems = () => {
      const { params } = match;

      if (!params.hasOwnProperty('id')) {
        return items;
      }
      return items.filter(item => item.status === match.params.id);
    };

    const body = arr => {
      if (!arr.length) return <div>Тут ни чего нет</div>;

      return arr.map(item => <Item key={item.id} item={item} />);
    };
    return <div className={style.wrapper}>{body(showItems())}</div>;
  }),
);
