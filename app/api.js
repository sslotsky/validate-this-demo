import axios from 'axios';
import { expire } from 'MODULES/session/actions';
import session from './session';
import store from './store';

export const adapter = axios.create({
  baseURL: process.env.API_BASE,
  withCredentials: true,
  headers: {
    Accept: 'application/json'
  }
});

adapter.interceptors.response.use(undefined, (error) => {
  if (error.response.status === 403) {
    store().dispatch(expire());
  }

  return Promise.reject(error);
});

export default {
  session: {
    authenticate: ({ username, password }) =>
      adapter.post('/session', { username, password }).then((resp) => {
        session.login(resp.data.user);
        return resp;
      }),
    logout: () => adapter.delete('/session')
  }
};

