import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { sortBy } from 'action';
import ItemListNav from 'Components/ItemListNav';
import ItemsFilter from 'Components/ItemsFilter';

class ItemList extends Component {
  static propTypes = {
    match: PropTypes.object,
    items: PropTypes.array,
    sortBy: PropTypes.string,
    sortByFunc: PropTypes.func,
  };

  render() {
    const { match, items, sortBy, sortByFunc } = this.props;

    return (
      <div>
        <ItemListNav
          match={match}
          sortByFunc={sortByFunc}
          activeCount={items.filter(item => item.status === 'active').length}
          completeCount={items.filter(item => item.status === 'complete').length}
          expiredCount={items.filter(item => item.status === 'expired').length}
          count={items.length}
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
  }),
  {
    sortByFunc: sortBy,
  },
)(ItemList);
