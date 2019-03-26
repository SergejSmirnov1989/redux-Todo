import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './timer.css';

class Timer extends Component {
  static propTypes = {
    deadline: PropTypes.number,
  };

  componentDidMount = () => {
    const timerId = setInterval(() => {
      if (this.timerRef === null) {
        return clearInterval(timerId);
      }
      this.timerRef.innerHTML = this.timerDeadLine().__html;
    }, 1000);
  };

  getTimerRef = node => (this.timerRef = node);

  declOfNum = (number, titles) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  };

  timerDeadLine = () => {
    const { deadline } = this.props;

    const D = (deadline - Date.now()) / (1000 * 60 * 60 * 24);
    const H = (D % 1) * 24;
    const M = (H % 1) * 60;
    const S = (M % 1) * 60;

    return {
      __html: `<div class='timer'>До ближайшего deadline осталось
        <div class='timer-wrapper'>
          <div class='timer-elem'>
            ${Math.floor(D)}<br> ${this.declOfNum(Math.floor(D), ['день', 'дня', 'дней'])}
          </div>
          <div class='timer-elem'>
            ${Math.floor(H)}<br> ${this.declOfNum(Math.floor(H), ['час', 'часа', 'часов'])}
          </div>
          <div class='timer-elem'>
            ${Math.floor(M)}<br> ${this.declOfNum(Math.floor(M), ['минута', 'минуты', 'минут'])}
          </div>
          <div class='timer-elem'>
            ${Math.floor(S)}<br> ${this.declOfNum(Math.floor(S), ['секунда', 'секунды', 'секунд'])}
          </div>
        </div>
      </div>`,
    };
  };

  render() {
    return <div ref={this.getTimerRef} dangerouslySetInnerHTML={this.timerDeadLine()} />;
  }
}

export default Timer;