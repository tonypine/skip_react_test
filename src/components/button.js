import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'components/button.css';

class Button extends Component {
  displayName: 'Button'

  static propTypes () {
    text: PropTypes.string.isRequired
    onClick: PropTypes.func
  }

  static defaultProps () {
    type: 'text'
    customClass: ''
    onClick: () => {}
  }

  componentDidMount () {
  }

  render() {
    return (
      <button className={this._getClassName()} type='button' onClick={this.onClickHandler.bind(this)}>
        {this.props.text}
      </button>
    );
  }

  // HANDLERS
  onClickHandler (evt) {
    this.props.onClick(evt)
  }

  _getClassName () {
    return `app-button ${this.props.customClass}`
  }
}

export default Button;
