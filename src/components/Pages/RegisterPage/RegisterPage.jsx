import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { operations } from '../../../redux/auth';
import commonStyles from '../../commonStyles/formComStyles.module.css';
import Button from '../../Button';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const initialState = {
    name: '',
    email: '',
    password: '',
  };
  const [userCredentials, setUserCredentials] = useState(initialState);

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(operations.registerUser(userCredentials));

    setUserCredentials(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className={commonStyles.form}>
      <label className={commonStyles.label}>
        Name
        <input
          type="text"
          name="name"
          value={userCredentials.name}
          onChange={handleChange}
          className={commonStyles.input}
        />
      </label>
      <label className={commonStyles.label}>
        Email
        <input
          type="email"
          name="email"
          value={userCredentials.email}
          onChange={handleChange}
          className={commonStyles.input}
        />
      </label>
      <label className={commonStyles.label}>
        Password
        <input
          type="password"
          name="password"
          value={userCredentials.password}
          onChange={handleChange}
          className={commonStyles.input}
          minLength="7"
        />
      </label>
      <Button type="submit" title="Register" className={commonStyles.button} />
    </form>
  );
};

export default RegisterPage;
