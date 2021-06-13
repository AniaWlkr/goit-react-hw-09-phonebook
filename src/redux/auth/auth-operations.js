import axios from 'axios';
import actions from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registerUser = userCredentials => async dispatch => {
  dispatch(actions.registerUserRequest());

  try {
    const response = await axios.post('/users/signup', userCredentials);

    token.set(response.data.token);

    dispatch(actions.registerUserSuccess(response.data));
  } catch (error) {
    alert('User credentials are invalid');
    dispatch(actions.registerUserError(error.message));
  }
};

const loginUser = userCredentials => async dispatch => {
  dispatch(actions.loginRequest());

  try {
    const response = await axios.post('/users/login', userCredentials);

    token.set(response.data.token);
    dispatch(actions.loginSuccess(response.data));
  } catch (error) {
    alert('User credentials are invalid');
    dispatch(actions.loginError(error.message));
  }
};

const logoutUser = () => dispatch => {
  dispatch(actions.logoutRequest());

  return axios
    .post('/users/logout')
    .then(() => {
      token.unset();
      dispatch(actions.logoutSuccess());
    })
    .catch(error => dispatch(actions.logoutError(error.message)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(actions.getCurrentUserRequest());

  return axios
    .get('/users/current')
    .then(({ data }) => dispatch(actions.getCurrentUserSuccess(data)))
    .catch(error => {
      token.unset();
      dispatch(actions.getCurrentUserError(error.message));
    });
};

export default { registerUser, loginUser, logoutUser, getCurrentUser };
