import React from 'react';
import PropTypes from 'prop-types';
import assignPropTypes from 'assign-prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteItem, rememberPathId, setStatus } from '../../action';
import style from './item.module.css';

export default withRouter(
  connect(
    state => ({
      items: state.items,
    }),
    {
      setComplete: setStatus,
      removeItem: deleteItem,
      remPath: rememberPathId,
    },
  )(
    assignPropTypes({
      id: PropTypes.string,
      showButtons: PropTypes.bool,
      history: PropTypes.object,
      items: PropTypes.array,
      setComplete: PropTypes.func,
      removeItem: PropTypes.func,
      remPath: PropTypes.func,
    })(({ id, setComplete, removeItem, items, history, remPath, showButtons = false }) => {
      const item = items.filter(item => item.id === id);
      const { selectedDay, title, text, status } = item[0];

      const onButtonClick = () => {
        history.push(`/items/active`);
      };

      const onDBLClick = () => {
        remPath(history.location.pathname, id);
        history.push('/edit');
      };

      return (
        <div onDoubleClick={onDBLClick} className={style.item}>
          <h1 className={style.title}>{title}</h1>
          {selectedDay && !showButtons && (
            <div className={style.date}>
              {new Date(selectedDay).toLocaleString('ru', {
                year: '2-digit',
                month: 'short',
                day: 'numeric',
              })}
            </div>
          )}
          <div className={style.text}>{text}</div>
          {showButtons && (
            <button
              type="button"
              className={`${style.button} ${style.red}`}
              onClick={onButtonClick}>
              Перейти
            </button>
          )}
          {!showButtons && (
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
          )}
        </div>
      );
    }),
  ),
);
