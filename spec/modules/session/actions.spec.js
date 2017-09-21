import 'SPECS/specHelper';
import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { SubmissionError } from 'redux-form';

import { mockAdapter } from 'SPECS/testUtils';

import * as actions from 'MODULES/session/actions';

const mockStore = configureStore([thunk]);

describe('session actions', () => {
  describe('authenticate', () => {
    beforeEach(() => mockAdapter.reset());

    context('on success', () => {
      it('logs in the user', (done) => {
        const store = mockStore();
        const user = { name: 'Bob Loblaw' };
        mockAdapter.onPost('/session').reply(200, { user });
        const expectedAction = actions.login(user);

        store.dispatch(actions.authenticate(user)).then(() => {
          expect(store.getActions()).toInclude(expectedAction);
          done();
        });
      });
    });

    context('if username is not found', () => {
      it('throws a SubmissionError', (done) => {
        const store = mockStore();
        mockAdapter.onPost('/session').reply(404);
        const expectedErrors = { username: ['Not found'] };

        store.dispatch(actions.authenticate({})).catch((err) => {
          expect(err).toBeA(SubmissionError);
          expect(err.errors).toEqual(expectedErrors);
          done();
        });
      });
    });

    context('if password is bad', () => {
      it('throws a SubmissionError', (done) => {
        const store = mockStore();
        mockAdapter.onPost('/session').reply(422);
        const expectedErrors = { password: ['Invalid'] };

        store.dispatch(actions.authenticate({})).catch((err) => {
          expect(err).toBeA(SubmissionError);
          expect(err.errors).toEqual(expectedErrors);
          done();
        });
      });
    });
  });
});
