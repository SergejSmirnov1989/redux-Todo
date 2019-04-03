import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-textarea-autosize';
import { onEditSave } from 'action';
import Validator from 'Decorator/Validator';
import { editRules } from 'const/validateRules';
import style from './edit.module.css';

class ItemEdit extends Component {
  static propTypes = {
    errors: PropTypes.object,
    validate: PropTypes.bool,
    path: PropTypes.string,
    item: PropTypes.array,
    history: PropTypes.object,
    refreshErrors: PropTypes.func,
    validateFields: PropTypes.func,
    handleTextEdit: PropTypes.func,
  };

  constructor(props) {
    super();

    this.state = {
      text: '',
    };

    this.setDefaultState = () => {
      if (props.item[0]) {
        this.state.text = props.item[0].text;
      }
    };

    this.setDefaultState();
  }

  componentDidUpdate = () => {
    if (this.state.edit) {
      this.inputRef.focus();
      this.inputRef.selectionStart = this.inputRef.value.length;
    }
  };

  getRef = node => {
    this.inputRef = node;
  };

  handleValueChange = e => {
    const { validateFields } = this.props;
    const newValue = e.target.value.trim();

    this.setState(
      () => {
        return {
          text: newValue,
        };
      },
      () =>
        validateFields({
          name: 'text',
          value: newValue,
        }),
    );
  };

  handleItemSave = () => {
    const { handleTextEdit, item, history, path, validate, refreshErrors } = this.props;
    const { text } = this.state;

    if (validate) {
      handleTextEdit(text, item[0].id);
    }

    refreshErrors(JSON.parse(JSON.stringify(editRules.fields)));
    history.push(path);
  };

  handleCancel = () => {
    const { history, path, refreshErrors } = this.props;

    refreshErrors(JSON.parse(JSON.stringify(editRules.fields)));
    history.push(path);
  };

  render() {
    const { item, history, errors } = this.props;
    const { text } = this.state;
    if (!item[0]) history.push('/');

    return (
      <div>
        {item[0] && (
          <div className={style.wrapper}>
            <h1 className={style['edit-title']}>{item[0].title}</h1>
            <div>{errors.text}</div>
            <TextareaAutosize
              ref={this.getRef}
              className={style['edit-text']}
              name="text"
              minRows={3}
              maxRows={20}
              useCacheForDOMMeasurements
              defaultValue={text}
              onChange={this.handleValueChange}
            />
            <div className={style['wrapper-button']}>
              <button type="button" className={style.button} onClick={this.handleItemSave}>
                ok
              </button>
              <button type="button" className={style.button} onClick={this.handleCancel}>
                cancel
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  state => ({
    item: state.items.filter(item => item.id === state.editStart),
    path: state.path,
  }),
  {
    handleTextEdit: onEditSave,
  },
)(Validator(ItemEdit, JSON.parse(JSON.stringify(editRules))));
