import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-textarea-autosize';
import style from './edit.module.css';

class ItemEdit extends Component {
  static propTypes = {
    text: PropTypes.string,
    edit: PropTypes.bool,
    onEditSave: PropTypes.func,
    handleValueChange: PropTypes.func,
    handleButtonSave: PropTypes.func,
    onClickCansel: PropTypes.func,
  };

  render() {
    const { text, edit, handleValueChange, handleButtonSave, onClickCansel } = this.props;

    return (
      <div className={style.wrapper}>
        <div className={style['edit-title']}>
          {' '}
          Поле обязательно для заполнения, не должно содержать менее 20 символов
        </div>
        <TextareaAutosize
          name="text"
          className={style['edit-text']}
          minRows={3}
          maxRows={20}
          useCacheForDOMMeasurements
          placeholder="Текст заметки"
          value={text}
          onChange={handleValueChange}
        />
        <div className={style['wrapper-button']}>
          <button type="button" className={style.button} disabled={edit} onClick={handleButtonSave}>
            сохранить
          </button>
          <button type="button" className={style.button} onClick={onClickCansel}>
            отмена
          </button>
        </div>
      </div>
    );
  }
}

export default ItemEdit;
