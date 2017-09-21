import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from 'MODULES/session/actions';

export function Logout({ logout }) {
  return (
    <button onClick={logout} type="button">Logout</button>
  );
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired
};

export default connect(undefined, actions)(Logout);
