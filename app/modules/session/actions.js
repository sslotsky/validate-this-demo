import { SubmissionError } from 'redux-form';
import api from 'APP_ROOT/api';
import session from 'APP_ROOT/session';
import * as actionTypes from './actionTypes';

export function login(user) {
  return {
    type: actionTypes.LOGIN,
    user
  };
}

export function clear() {
  return { type: actionTypes.CLEAR };
}

export function expire() {
  return (dispatch) => {
    session.logout();
    dispatch(clear());
  };
}

export function logout() {
  return dispatch => api.session.logout().then(() => dispatch(expire()));
}

export function authenticate(user) {
  return dispatch => api.session.authenticate(user).then((resp) => {
    dispatch(login(resp.data.user));
  }).catch((err) => {
    if (err.response.status === 404) {
      throw new SubmissionError({ username: ['Not found'] });
    } else if (err.response.status === 422) {
      throw new SubmissionError({ password: ['Invalid'] });
    } else {
      throw err;
    }
  });
}

