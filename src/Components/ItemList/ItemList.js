import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { sortBy } from 'action';
import ItemListNav from 'Components/ItemListNav';
import ItemsFilter from 'Components/ItemsFilter';
import { getItemsCount } from 'Selectors';

class ItemList extends Component {
  static propTypes = {
    match: PropTypes.object,
    items: PropTypes.array,
    sortBy: PropTypes.string,
    sortByFunc: PropTypes.func,
    count: PropTypes.object,
  };

  render() {
    const { match, items, sortBy, sortByFunc, count } = this.props;

    return (
      <div>
        <ItemListNav
          match={match}
          sortByFunc={sortByFunc}
          activeCount={count.activeCount}
          completeCount={count.completeCount}
          expiredCount={count.expiredCount}
          count={count.count}
        />
        <Route
          path={`${match.path}`}
          render={() => <ItemsFilter items={items} sortBy={sortBy} />}
          exact
        />
        <Route
          path={`${match.path}/:id`}
          render={() => <ItemsFilter items={items} sortBy={sortBy} />}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    items: state.items,
    sortBy: state.sortBy,
    count: getItemsCount(state),
  }),
  {
    sortByFunc: sortBy,
  },
)(ItemList);
