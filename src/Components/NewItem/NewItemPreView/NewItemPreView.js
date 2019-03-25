import React from 'react';
import PropTypes from 'prop-types';
import assignPropTypes from 'assign-prop-types';
import style from './View.module.css';

export default assignPropTypes({
  title: PropTypes.string,
  content: PropTypes.string,
  selectedDay: PropTypes.number,
})(({ title, text, selectedDay }) => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>{title}</h1>
      <div className={style.text}>{text}</div>
      {selectedDay && (
        <div className={style.date}>
          {new Date(selectedDay).toLocaleString('ru', {
            year: '2-digit',
            month: 'short',
            day: 'numeric',
          })}
        </div>
      )}
    </div>
  );
});
