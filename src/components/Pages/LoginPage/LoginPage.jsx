import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { operations } from '../../../redux/auth';
import Button from '../../Button';
import commonStyles from '../../commonStyles/formComStyles.module.css';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.loginUser(this.state);

    this.setState({
      email: '',
      password: '',
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={commonStyles.form}>
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
          />
        </label>
        <Button type="submit" title="Login" className={commonStyles.button} />
      </form>
    );
  }
}

LoginPage.propTypes = {
  loginUser: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  loginUser: userCredentials => dispatch(operations.loginUser(userCredentials)),
});

export default connect(null, mapDispatchToProps)(LoginPage);
