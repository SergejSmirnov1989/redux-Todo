import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

class ItemFull extends Component {
  static propTypes = {
    item: PropTypes.array,
  };

  render() {
    const { item, handleItemEdit } = this.props;
    const { title, text, status, createdAt, selectedDay } = item[0];
    return (
      <div className={style['item-body']}>
        <h1 className={style.title}>{title}</h1>
        <div className={style.text}>
          {text}
          <button
            type="button"
            className={style.btn}
            title="Редактировать"
            onClick={handleItemEdit}>
            Р
          </button>
        </div>
        <div className={style.bar}>
          <div className={style.status}>Статус: {status}</div>
          <div className={style['created-at']}>
            Создано:{' '}
            {new Date(createdAt).toLocaleString('ru', {
              year: '2-digit',
              month: 'short',
              day: 'numeric',
            })}
          </div>
          {selectedDay && (
            <div className={style['selected-day']}>
              Deadline:{' '}
              {new Date(selectedDay).toLocaleString('ru', {
                year: '2-digit',
                month: 'short',
                day: 'numeric',
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ItemFull;
