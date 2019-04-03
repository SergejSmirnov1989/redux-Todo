import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ItemContainer from 'Container/ItemContainer';
import style from './item.module.css';

const ItemsFilter = ({ items, match, sortBy }) => {
  const showItems = () => {
    const { params } = match;

    items.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) return 1;
      if (a[sortBy] < b[sortBy]) return -1;
      return 0;
    });

    if (!params.hasOwnProperty('id')) {
      return items;
    }

    return items.filter(item => item.status === match.params.id);
  };

  const body = arr => {
    if (!arr.length) return <div>Тут ни чего нет</div>;

    return arr.map(item => <ItemContainer key={item.id} id={item.id} />);
  };

  return <div className={style.wrapper}>{body(showItems())}</div>;
};

ItemsFilter.propTypes = {
  match: PropTypes.object,
  items: PropTypes.array,
  sortBy: PropTypes.string,
};

export default withRouter(ItemsFilter);
