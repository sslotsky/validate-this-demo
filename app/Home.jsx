import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Info } from 'MODULES/session/components';

export function Home({ authenticated }) {
  if (!authenticated) {
    return <Redirect to={{ pathname: '/login' }} />;
  }

  return (
    <div className="soft-half">
      <Info />
      <h2>This is home, where you live!</h2>
    </div>
  );
}

Home.propTypes = {
  authenticated: PropTypes.bool.isRequired
};

function select(state) {
  return { authenticated: !state.session.get('user').isEmpty() };
}

export default connect(
  select
)(Home);
