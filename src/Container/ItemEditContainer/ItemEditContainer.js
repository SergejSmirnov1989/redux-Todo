import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ItemEdit from 'Components/ItemEdit/ItemEdit';
import { onEditSave } from 'action';

class ItemEditContainer extends Component {
  static propTypes = {
    items: PropTypes.array,
    match: PropTypes.object,
    onEditSave: PropTypes.func,
    history: PropTypes.object,
  };

  constructor(props) {
    super();

    this.state = {
      text: props.items.filter(item => item.id === props.match.url.split('/')[2])[0].text,
      edit: true,
    };
  }

  valid = value => {
    if (value.length > 20 && value.length < 500) {
      this.setState(() => ({
        edit: false,
      }));
      return;
    }
    this.setState(() => ({
      edit: true,
    }));
  };

  handleValueChange = e => {
    const newValue = e.target.value.trim();

    this.setState(
      () => ({
        text: newValue,
      }),
      () => this.valid(newValue),
    );
  };

  onClickCansel = () => {
    const { history, match } = this.props;

    history.push(
      match.url
        .split('/')
        .filter(item => item !== 'edit')
        .join('/'),
    );
  };

  handleButtonSave = () => {
    const { onEditSave, match, history } = this.props;
    const { text } = this.state;
    onEditSave(text, match.url.split('/')[2]);
    history.push(
      match.url
        .split('/')
        .filter(item => item !== 'edit')
        .join('/'),
    );
  };

  render() {
    const { text, edit } = this.state;
    return (
      <ItemEdit
        text={text}
        edit={edit}
        handleValueChange={this.handleValueChange}
        handleButtonSave={this.handleButtonSave}
        onClickCansel={this.onClickCansel}
      />
    );
  }
}

export default connect(
  store => ({
    items: store.items,
  }),
  {
    onEditSave,
  },
)(ItemEditContainer);
