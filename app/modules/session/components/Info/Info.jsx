import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logout from '../Logout';

export function Info({ user }) {
  if (user.isEmpty()) {
    return (
      <Link to="/login">
        Login
      </Link>
    );
  }

  return (
    <div className="pure-menu pure-menu-horizontal">
      <span className="pure-menu-heading">
        Welcome {user.get('username')}
      </span>
      <ul className="pure-menu-list">
        <li className="pure-menu-item">
          <Logout />
        </li>
      </ul>
    </div>
  );
}

Info.propTypes = {
  user: PropTypes.instanceOf(Map).isRequired
};

export default connect(
  state => ({ user: state.session.get('user') })
)(Info);
