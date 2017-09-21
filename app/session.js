export default {
  login: user => window.localStorage.setItem('user', JSON.stringify(user)),
  logout: () => window.localStorage.removeItem('user')
};
