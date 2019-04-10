import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoNav from 'Components/TodoNav/TodoNav';
import { withRouter } from 'react-router-dom';
import { PRESS_ENTER, PRESS_ESC } from 'const/magicNam';

class TodoNavContainer extends Component {
  static propTypes = {
    history: PropTypes.object,
  };

  state = {
    search: '',
  };

  handleValueChange = e => {
    const newValue = e.target.value.trim();

    this.setState(() => ({
      search: newValue,
    }));
  };

  handleStartSearch = e => {
    const { keyCode } = e;
    const { search } = this.state;

    if (keyCode === PRESS_ESC) {
      this.setState(() => ({
        search: '',
      }));
      return;
    }
    if (keyCode !== PRESS_ENTER || search === '') return;

    const { history } = this.props;

    history.push(`/search?q=${search}`);
    this.setState(() => ({
      search: '',
    }));
  };

  render() {
    const { search } = this.state;
    return (
      <TodoNav
        search={search}
        handleValueChange={this.handleValueChange}
        handleStartSearch={this.handleStartSearch}
      />
    );
  }
}

export default withRouter(TodoNavContainer);
