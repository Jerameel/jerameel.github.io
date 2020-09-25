import axios from 'axios';
import { API } from 'consts';
import { LoginMeta } from 'types/store/LoginState';
import { createBasicToken } from 'utils/Token';

const BASE_URL = `${API.URL}/${API.VERSION}`;
const AUTH_URL = `${BASE_URL}/auth`;

export const login = (data: LoginMeta) => {
  return axios({
    method: 'post',
    url: `${AUTH_URL}/login`,
    headers: {
      Authorization: createBasicToken(data),
    },
    data: {},
  });
};
