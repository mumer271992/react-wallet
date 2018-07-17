import httpService from '../services/httpService';
import authService from '../services/authService';

import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

export const login = (access_token, user) => ({
  type: 'LOGIN',
  access_token,
  user
});

export const startLogin = (user) => {
  return (dispatch) => {
    // TODO: update state to show loader
    //dispatch()
    return authService.login(user).then(resp => {
      // TODO: update state to hide loader
      if (resp && resp.access_token) {
        dispatch(login(resp.access_token, resp));
        history.push('/dashboard');
      }
    }) 
  }
};

export const logout = () => ({
  type: 'LOGOUT'
});

// export const startLogout = () => {
//   return () => {
//     return 
//   };
// };
