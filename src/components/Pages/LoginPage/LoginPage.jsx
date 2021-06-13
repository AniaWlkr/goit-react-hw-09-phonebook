import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { operations } from '../../../redux/auth';
import commonStyles from '../../commonStyles/formComStyles.module.css';
import Button from '../../Button';

const LoginPage = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const handleEmailChange = event => setEmail(event.currentTarget.value);

  const [password, setPassword] = useState('');
  const handlePasswordChange = event => setPassword(event.currentTarget.value);

  const handleSubmit = event => {
    event.preventDefault();

    const userCredentials = { email, password };
    dispatch(operations.loginUser(userCredentials));

    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className={commonStyles.form}>
      <label className={commonStyles.label}>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          className={commonStyles.input}
        />
      </label>
      <label className={commonStyles.label}>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          className={commonStyles.input}
        />
      </label>
      <Button type="submit" title="Login" className={commonStyles.button} />
    </form>
  );
};

export default LoginPage;
