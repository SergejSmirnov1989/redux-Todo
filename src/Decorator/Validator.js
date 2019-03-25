import React, { Component } from 'react';

export default (OriginComponent, rules) =>
  class Validator extends Component {
    state = {
      errors: rules.fields,
    };

    validateFields = ({ name, value }) => {
      const { errors } = this.state;

      for (let fields in rules) {
        if (fields !== name) {
          continue;
        }

        for (let key in rules[fields]) {
          if (key !== 'required' && (value === '' || value === null)) {
            break;
          }

          if (key === 'required' && value === '') {
            errors[fields] = 'поле обязательное для заполнения';
            break;
          }

          if (key === 'min' && value.length < rules[fields].min) {
            errors[fields] = `должно быть не менее ${rules[fields].min} символов`;
            break;
          }

          if (key === 'max' && value.length > rules[fields].max) {
            errors[fields] = `должно быть не более ${rules[fields].max} символов`;
            break;
          }

          if (key === 'futureDay' && value < Date.now() + rules[fields].futureDay) {
            errors[fields] = `ты не успеешь`;
            break;
          }
          errors[fields] = '';
        }
      }

      this.setState(() => ({
        errors,
      }));
    };

    refreshErrors = defaultFields => {
      this.setState(() => ({
        errors: defaultFields,
      }));
    };

    render() {
      const { errors } = this.state;
      return (
        <OriginComponent
          errors={errors}
          validate={Object.values(errors).every(item => item === '')}
          refreshErrors={this.refreshErrors}
          validateFields={this.validateFields}
          {...this.props}
        />
      );
    }
  };
