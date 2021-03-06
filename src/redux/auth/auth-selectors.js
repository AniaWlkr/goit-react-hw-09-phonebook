const getIsAuthenticated = state => Boolean(state.auth.token);
const getUserName = state => state.auth.user.name;

export default { getIsAuthenticated, getUserName };
