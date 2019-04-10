import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StartPage from 'Components/StartPage';
import { getItemsCount, getDeadline, getLastElem } from 'Selectors';

class StartPageContainer extends Component {
  static propTypes = {
    lastElem: PropTypes.array,
    deadline: PropTypes.number,
    count: PropTypes.object,
  };

  render() {
    const { count, lastElem, deadline } = this.props;
    return (
      <StartPage
        lastElem={lastElem}
        deadline={deadline}
        activeCount={count.activeCount}
        completeCount={count.completeCount}
        expiredCount={count.expiredCount}
        count={count.count}
      />
    );
  }
}

export default connect(state => {
  return {
    deadline: getDeadline(state),
    lastElem: getLastElem(state),
    count: getItemsCount(state),
  };
})(StartPageContainer);
