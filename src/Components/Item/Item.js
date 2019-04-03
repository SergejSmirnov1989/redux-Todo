import React from 'react';
import PropTypes from 'prop-types';
import style from './item.module.css';

const Item = ({
  handleStatusSet,
  handleItemRemove,
  handlePathChange,
  selectedDay,
  title,
  text,
  status,
  handleOpenHD,
  showButtons = false,
}) => (
  <div className={style.item} onDoubleClick={handleOpenHD}>
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
      <button type="button" className={`${style.button} ${style.red}`} onClick={handlePathChange}>
        Перейти
      </button>
    )}
    {!showButtons && (
      <div className={style.wrapper}>
        <button type="button" className={`${style.button} ${style.red}`} onClick={handleItemRemove}>
          delete
        </button>
        {status !== 'expired' && (
          <button
            type="button"
            className={`${style.button} ${style.blue}`}
            onClick={handleStatusSet}>
            {status === 'active' ? 'complete' : 'active'}
          </button>
        )}
      </div>
    )}
  </div>
);

Item.propTypes = {
  selectedDay: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.string,
  status: PropTypes.string,
  showButtons: PropTypes.bool,
  handlePathChange: PropTypes.func,
  handleStatusSet: PropTypes.func,
  handleItemRemove: PropTypes.func,
};

export default Item;
