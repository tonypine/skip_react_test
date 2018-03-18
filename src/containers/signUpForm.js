import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from 'components/input'
import Button from 'components/button'
import CustomerApi from 'api/customerApi'
import Redirect from "react-router-dom"

import 'containers/signUpForm.css';

class SignUpForm extends Component {
  displayName: 'SignUpForm'

  constructor () {
    super()
    this.state = {
      userName: '',
      userEmail: '',
      userAddress: '',
      userPassword: '',
      redirectToReferrer: false
    }
  }

  login = () => {
    CustomerApi.create(this.state).then(() => {
      this.setState({ redirectToReferrer: true });
    })
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/products" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div className="signUpForm">
        <h2>Sign Up</h2>
        <p>
          <label>Name:</label>
          <Input name="user_name" value={this.state.userName} onChange={this.onChangeUserName.bind(this)} />
        </p>
        <p>
          <label>Email:</label>
          <Input name="user_email" value={this.state.userEmail} onChange={this.onChangeUserEmail.bind(this)} />
        </p>
        <p>
          <label>Address:</label>
          <Input name="user_address" value={this.state.userAddress} onChange={this.onChangeUserAddress.bind(this)} />
        </p>
        <p>
          <label>Password:</label>
          <Input name="user_password" type="password" value={this.state.userPassword} onChange={this.onChangeUserPassword.bind(this)} />
        </p>
        <Button text="Sign Up" onClick={this.onClickHandler.bind(this)} />
      </div>
    );
  }

  // HANDLERS
  onClickHandler () {
    this.login()
  }
  onChangeUserName (evt) {
    this.setState({
      userName: evt.currentTarget.value
    })
  }
  onChangeUserEmail (evt) {
    this.setState({
      userEmail: evt.currentTarget.value
    })
  }
  onChangeUserAddress (evt) {
    this.setState({
      userAddress: evt.currentTarget.value
    })
  }
  onChangeUserPassword (evt) {
    this.setState({
      userPassword: evt.currentTarget.value
    })
  }
}

export default SignUpForm;
