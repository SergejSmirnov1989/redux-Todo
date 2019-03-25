import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Validator from '../../Decorator/Validator';
import Form from './Form/Form';
import NewItemPreView from './NewItemPreView/NewItemPreView';
import { newItemRules as validateRules } from '../../const/validateRules';
import style from './new-item.module.css';
import { newItem } from '../../action';

class NewItem extends Component {
  static propTypes = {
    errors: PropTypes.object,
    validate: PropTypes.bool,
    refreshErrors: PropTypes.func,
    validateFields: PropTypes.func,
    addNewItem: PropTypes.func,
  };

  state = {
    title: '',
    text: '',
    selectedDay: null,
  };

  clearState = () => {
    this.setState(() => ({
      title: '',
      text: '',
      selectedDay: null,
    }));
  };

  onButtonClick = () => {
    const { refreshErrors, validate, addNewItem } = this.props;
    const { title, text, selectedDay } = this.state;
    const status = 'active';
    const item = { title, text, selectedDay, status };

    if (!validate) return;

    addNewItem(item);
    this.clearState();
    refreshErrors(JSON.parse(JSON.stringify(validateRules.fields)));
  };

  onCancelClick = () => {
    const { refreshErrors } = this.props;
    this.clearState();
    refreshErrors(JSON.parse(JSON.stringify(validateRules.fields)));
  };

  handleDayClick = day => {
    const { validateFields } = this.props;

    this.setState(
      () => ({
        selectedDay: day.valueOf(),
      }),
      () =>
        validateFields({
          name: 'selectedDay',
          value: day.valueOf(),
        }),
    );
  };

  handleValueChange = e => {
    const { validateFields } = this.props;
    const { name, value } = e.target;

    this.setState(
      () => ({
        [name]: value,
      }),
      () => validateFields({ name, value }),
    );
  };

  render() {
    const { title, text, selectedDay } = this.state;
    const { errors, validate } = this.props;
    return (
      <div className={style.wrapper}>
        <Form
          title={title}
          text={text}
          selectedDay={selectedDay}
          errors={errors}
          validate={validate}
          onButtonClick={this.onButtonClick}
          onCancelClick={this.onCancelClick}
          handleValueChange={this.handleValueChange}
          handleDayClick={this.handleDayClick}
        />
        <NewItemPreView title={title} text={text} selectedDay={selectedDay} />
      </div>
    );
  }
}

export default connect(
  null,
  {
    addNewItem: newItem,
  },
)(Validator(NewItem, JSON.parse(JSON.stringify(validateRules))));
