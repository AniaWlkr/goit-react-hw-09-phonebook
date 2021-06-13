import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../../Button';
import { operations } from '../../../redux/auth';
import commonStyles from '../../commonStyles/formComStyles.module.css';

class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.registerUser(this.state);

    this.setState({
      name: '',
      email: '',
      password: '',
    });
  };

  static propTypes = { registerUser: PropTypes.func };

  render() {
    const { name, email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={commonStyles.form}>
        <label className={commonStyles.label}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            className={commonStyles.input}
          />
        </label>
        <label className={commonStyles.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            className={commonStyles.input}
          />
        </label>
        <label className={commonStyles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            className={commonStyles.input}
            minLength="7"
          />
        </label>
        <Button
          type="submit"
          title="Register"
          className={commonStyles.button}
        />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  registerUser: userCredentials =>
    dispatch(operations.registerUser(userCredentials)),
});

export default connect(null, mapDispatchToProps)(RegisterPage);
