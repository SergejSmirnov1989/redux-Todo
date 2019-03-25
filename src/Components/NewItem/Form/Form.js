import React from 'react';
import PropTypes from 'prop-types';
import assignPropTypes from 'assign-prop-types';
import TextareaAutosize from 'react-textarea-autosize';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { MONTHS, WEEKDAYS_LONG, WEEKDAYS_SHORT } from '../../../const/toDayPicker';
import style from './form.module.css';

export default assignPropTypes({
  title: PropTypes.string,
  text: PropTypes.string,
  selectedDay: PropTypes.number,
  validate: PropTypes.bool,
  errors: PropTypes.object,
  onButtonClick: PropTypes.func,
  handleValueChange: PropTypes.func,
  handleDayClick: PropTypes.func,
})(
  ({
    title,
    text,
    selectedDay,
    validate,
    errors,
    onButtonClick,
    onCancelClick,
    handleValueChange,
    handleDayClick,
  }) => {
    const onSubmit = e => {
      e.preventDefault();
    };

    return (
      <form className={style['new-item']} onSubmit={onSubmit}>
        <div className={style.error}>{errors.title ? errors.title : ''}</div>
        <input
          type="text"
          name="title"
          className={style['new-title']}
          placeholder="Заголавок"
          value={title}
          onChange={handleValueChange}
        />
        <br />
        <div className={style.error}>{errors.text ? errors.text : ''}</div>
        <TextareaAutosize
          name="text"
          className={style['new-text']}
          minRows={3}
          maxRows={20}
          useCacheForDOMMeasurements
          placeholder="Текст заметки"
          value={text}
          onChange={handleValueChange}
        />
        <div className={style.error}>{errors.selectedDay ? errors.selectedDay : ''}</div>
        <div className={style.wrapper}>
          <DayPicker
            className={style['day-picker']}
            months={MONTHS}
            weekdaysLong={WEEKDAYS_LONG}
            weekdaysShort={WEEKDAYS_SHORT}
            onDayClick={handleDayClick}
            selectedDays={new Date(selectedDay)}
          />
          <div className={style['dead-line']}>DeadLine</div>
        </div>
        <button type="button" className={style.btn} disabled={!validate} onClick={onButtonClick}>
          Создать
        </button>
        <button type="button" className={style.btn} onClick={onCancelClick}>
          Отмена
        </button>
      </form>
    );
  },
);
