import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ItemFull from 'Components/ItemFull/ItemFull';

class ItemFullContainer extends Component {
  static propTypes = {
    items: PropTypes.array,
    match: PropTypes.object,
    history: PropTypes.object,
  };

  constructor(props) {
    super();
    this.state = {
      id: props.match.url.split('/')[2],
    };
  }

  handleItemEdit = () => {
    const { history } = this.props;

    history.push(`${history.location.pathname}/edit`);
  };

  render() {
    const { items } = this.props;
    const { id } = this.state;
    return (
      <ItemFull item={items.filter(item => item.id === id)} handleItemEdit={this.handleItemEdit} />
    );
  }
}

export default withRouter(
  connect(state => ({
    items: state.items,
  }))(ItemFullContainer),
);
