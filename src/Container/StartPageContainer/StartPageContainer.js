import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StartPage from 'Components/StartPage';

class StartPageContainer extends Component {
  static propTypes = {
    lastElem: PropTypes.array,
    deadline: PropTypes.number,
    activeCount: PropTypes.number,
    completeCount: PropTypes.number,
    expiredCount: PropTypes.number,
    count: PropTypes.number,
  };

  render() {
    const { activeCount, completeCount, expiredCount, count, lastElem, deadline } = this.props;
    return (
      <StartPage
        lastElem={lastElem}
        deadline={deadline}
        activeCount={activeCount}
        completeCount={completeCount}
        expiredCount={expiredCount}
        count={count}
      />
    );
  }
}

export default connect(state => {
  const deadline = Math.min(
    ...state.items
      .filter(item => item.status === 'active' && item.selectedDay)
      .map(item => item.selectedDay),
  );
  return {
    deadline,
    lastElem: state.items.filter(item => item.selectedDay === deadline),
    activeCount: state.items.filter(item => item.status === 'active').length,
    completeCount: state.items.filter(item => item.status === 'complete').length,
    expiredCount: state.items.filter(item => item.status === 'expired').length,
    count: state.items.length,
  };
})(StartPageContainer);
