import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { onItemRemove, rememberPathId, onStatusSet } from 'action';
import Item from 'Components/Item';

class ItemContainer extends Component {
  static propTypes = {
    id: PropTypes.string,
    showButtons: PropTypes.bool,
    history: PropTypes.object,
    items: PropTypes.array,
    handleStatusSet: PropTypes.func,
    handleItemRemove: PropTypes.func,
    remPath: PropTypes.func,
  };

  handleItemRemove = () => {
    const { handleItemRemove, id } = this.props;

    handleItemRemove(id);
  };

  handleStatusSet = () => {
    const { handleStatusSet, id } = this.props;

    handleStatusSet(id);
  };

  handlePathChange = () => {
    const { history } = this.props;

    history.push(`/items/active`);
  };

  handleOpenHD = () => {
    const { match, id, history } = this.props;

    if (match.url.split('/')[1] !== 'item') {
      history.push(`/item/${id}`);
    }
  };

  render() {
    const { items, id } = this.props;
    if (!id) {
    }
    const item = items.filter(item => item.id === id);
    const { selectedDay, title, text, status } = item[0];
    const { showButtons } = this.props;

    return (
      <Item
        handleOpenHD={this.handleOpenHD}
        selectedDay={selectedDay}
        title={title}
        text={text}
        status={status}
        showButtons={showButtons}
        handleStatusSet={this.handleStatusSet}
        handleItemRemove={this.handleItemRemove}
        handlePathChange={this.handlePathChange}
      />
    );
  }
}

export default withRouter(
  connect(
    state => ({
      items: state.items,
    }),
    {
      handleStatusSet: onStatusSet,
      handleItemRemove: onItemRemove,
      remPath: rememberPathId,
    },
  )(ItemContainer),
);
