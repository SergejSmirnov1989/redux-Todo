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

  constructor(props) {
    super();
    this.state = {
      pageId: props.id || props.match.url.split('/')[2],
    };
  }

  handleItemRemove = () => {
    const { handleItemRemove } = this.props;
    const { pageId } = this.state;

    handleItemRemove(pageId);
  };

  handleStatusSet = () => {
    const { handleStatusSet } = this.props;
    const { pageId } = this.state;

    handleStatusSet(pageId);
  };

  handlePathChange = () => {
    const { history } = this.props;

    history.push(`/items/active`);
  };

  handleOpenHD = () => {
    const { match, history } = this.props;
    const { pageId } = this.state;

    if (match.url.split('/')[1] !== 'item') {
      history.push(`/item/${pageId}`);
    }
  };

  render() {
    const { items } = this.props;
    const { pageId } = this.state;
    const item = items.filter(item => item.id === pageId);
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
