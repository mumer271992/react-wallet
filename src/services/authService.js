import httpService from './httpService';

function login({email, password}){
  return new Promise((resolve, reject) => {
    httpService.post('/login', { email, password }).then((resp) => {
      if (resp && resp.access_token) {
        localStorage.setItem('access_token', resp.access_token);
        localStorage.setItem('user', JSON.stringify(resp));
        resolve(resp);
      } else {
        reject(resp);
      }
    })
  });
}

const authService = {
  login: login
}

export default authService;