import React from 'react';
import PropTypes from 'prop-types';
import assignPropTypes from 'assign-prop-types';
import { connect } from 'react-redux';
import { deleteItem, setStatus } from '../../action';
import style from './item.module.css';

export default connect(
  null,
  {
    setComplete: setStatus,
    removeItem: deleteItem,
  },
)(
  assignPropTypes({
    item: PropTypes.object,
    setComplete: PropTypes.func,
  })(({ item, setComplete, removeItem }) => {
    const { title, text, selectedDay, id, status } = item;

    return (
      <div className={style.item}>
        <h1 className={style.title}>{title}</h1>
        {selectedDay && (
          <div className={style.date}>
            {new Date(selectedDay).toLocaleString('ru', {
              year: '2-digit',
              month: 'short',
              day: 'numeric',
            })}
          </div>
        )}
        <div className={style.text}>{text}</div>

        <div className={style.wrapper}>
          <button
            type="button"
            className={`${style.button} ${style.red}`}
            onClick={() => removeItem(id)}>
            delete
          </button>
          {status !== 'expired' && (
            <button
              type="button"
              className={`${style.button} ${style.blue}`}
              onClick={() => setComplete(id)}>
              {status === 'active' ? 'complete' : 'active'}
            </button>
          )}
        </div>
      </div>
    );
  }),
);
