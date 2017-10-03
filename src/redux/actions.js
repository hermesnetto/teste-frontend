import axios from 'axios';
import * as t from './types';
import { url, token } from '../apiConfig';

export const listShots = shots => ({
  type: t.LIST_SHOTS,
  shots,
});

export const loadShotsList = dispatch => ({
  type: t.LIST_SHOTS,
  payload: axios.get(`${url}/shots?access_token=${token}`)
});