import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'components/input.css';

class Input extends Component {
  displayName: 'Input'

  static propTypes () {
    name: PropTypes.string.isRequired;
    value: PropTypes.string;
    type: PropTypes.string;
    onChange: PropTypes.func;
  }

  static defaultProps () {
    type: 'text';
    onChange: () => {};
  }

  componentDidMount () {
  }

  render() {
    return (
      <input className="app-input" type={this.props.type} name={this.props.name} value={this.props.value} onChange={this.onChangeHandler.bind(this)} />
    );
  }

  // HANDLERS
  onChangeHandler (evt) {
    this.props.onChange(evt)
  }
}

export default Input;
