import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemContainer from 'Container/ItemContainer';
import Timer from 'Components/Timer';
import style from './main.module.css';

class StartPage extends Component {
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
      <div className={style.main}>
        <div className={style.left}>
          <div className={style.count}>Всего записей {count}</div>
          <div className={style.count}>Активных {activeCount}</div>
          <div className={style.count}>Выполненых {completeCount}</div>
          <div className={style.count}>За эти вас будут бить {expiredCount}</div>
        </div>
        {lastElem[0] && (
          <div className={style.right}>
            <Timer deadline={deadline} />
            <ItemContainer id={lastElem[0].id} showButtons />
          </div>
        )}
      </div>
    );
  }
}

export default StartPage;
