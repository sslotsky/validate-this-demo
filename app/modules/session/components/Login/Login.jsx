import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { FormInput, Save } from 'react-violet-forms';
import { connect } from 'react-redux';
import { validator } from 'validate-this';

import { authenticate } from 'MODULES/session/actions';

export class Login extends Component {
  state = {
    success: false
  };

  render() {
    if (this.state.success) {
      return <Redirect to={{ pathname: '/' }} />;
    }

    const submit = e => this.props.handleSubmit(e).then(() => this.setState({ success: true }));

    return (
      <div className="login">
        <div className="container">
          <form onSubmit={submit}>
            <Field name="username" component={FormInput} label="Username" />
            <Field name="password" component={FormInput} label="Password" type="password" />
            <Field name="confirm" component={FormInput} label="Confirm Password" type="password" />
            <div className="form-group">
              <Save {...this.props} icon="" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

const actions = { onSubmit: authenticate };

const errorIf = (fail, message) => (fail && message) || undefined;

const required = val => errorIf(!val, 'Required');

const matches = field => (val, values) => errorIf(values[field] !== val, 'Does not match');

const validate = values =>
  validator(values, (v) => {
    v.validate('username', 'password', 'confirm').satisfies(required);
    v.validate('confirm').satisfies(matches('password'));
  });

export default connect(undefined, actions)(
  reduxForm({
    form: 'login',
    validate
  })(Login)
);
