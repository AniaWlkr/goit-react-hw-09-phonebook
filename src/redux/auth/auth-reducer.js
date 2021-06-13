import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './auth-actions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [actions.registerUserSuccess]: (_, { payload }) => payload.user,
  [actions.loginSuccess]: (_, { payload }) => payload.user,
  [actions.logoutSuccess]: () => initialUserState,
  [actions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [actions.registerUserSuccess]: (_, { payload }) => payload.token,
  [actions.loginSuccess]: (_, { payload }) => payload.token,
  [actions.getCurrentUserError]: () => null,
  [actions.logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [actions.registerUserError]: (_, { payload }) => payload,
  [actions.loginError]: (_, { payload }) => payload,
  [actions.logoutError]: (_, { payload }) => payload,
  [actions.getCurrentUserError]: (_, { payload }) => payload,
});

export default combineReducers({ user, token, error });
