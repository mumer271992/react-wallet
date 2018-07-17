const access_token = localStorage.getItem('access_token');
const user = localStorage.getItem('user');

const DEFAULT_STATE = {
  access_token: access_token ? access_token : null,
  user: user ? JSON.parse(user) : {}
}

export default (state = { access_token: '', user: {} }, action) => {
  console.log("Default: ", state);
  switch (action.type) {
    case 'LOGIN':
      return {
        access_token: action.access_token,
        user: action.user
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
