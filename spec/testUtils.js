import MockAdapter from 'axios-mock-adapter';
import { adapter as apiAdapter } from 'APP_ROOT/api';

export const mockAdapter = new MockAdapter(apiAdapter);

