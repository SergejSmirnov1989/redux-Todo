import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ItemsFilter from '../../Components/ItemsFilter/ItemsFilter';
import SearchPanel from '../../Components/SearchPanel/SearchPanel';

class SearchContainer extends Component {
  static propTypes = {
    items: PropTypes.array,
  };

  constructor(props) {
    super();
    this.state = {
      searchStr: new URLSearchParams(props.location.search).get('q'),
      searchFilters: {
        searchInBody: false,
      },
    };
  }

  handleFilterChange = () => {
    // eslint-disable-next-line react/destructuring-assignment
    const { searchInBody } = this.state.searchFilters;

    this.setState(() => ({
      searchFilters: {
        searchInBody: !searchInBody,
      },
    }));
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { location } = this.props;
    const searchParam = new URLSearchParams(location.search).get('q');

    if (prevState.searchStr === searchParam) return;

    this.setState(() => ({
      searchStr: searchParam,
    }));
  };

  getSearchingItem = () => {
    const { items } = this.props;
    const { searchStr, searchFilters } = this.state;

    if (searchFilters.searchInBody) {
      return items.filter(
        item => item.title.indexOf(searchStr) !== -1 || item.text.indexOf(searchStr) !== -1,
      );
    }
    return items.filter(item => item.title.indexOf(searchStr) !== -1);
  };

  render() {
    const { searchFilters } = this.state;
    return (
      <div>
        <SearchPanel
          searchInBody={searchFilters.searchInBody}
          handleFilterChange={this.handleFilterChange}
        />
        <ItemsFilter items={this.getSearchingItem()} sortBy={undefined} />
      </div>
    );
  }
}

export default connect(store => ({
  items: store.items,
}))(SearchContainer);
