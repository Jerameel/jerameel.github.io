import { AsyncState } from 'types/AsyncState';

import { AuthState } from './AuthState';
import { LoginMeta, LoginPayload } from './LoginState';

export interface Store {
  auth: AuthState;
  login: AsyncState<LoginMeta, LoginPayload>;
}
