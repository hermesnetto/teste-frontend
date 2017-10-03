import axios from 'axios';
import * as t from './types';
import { url, token } from '../apiConfig';

/**
 * Paginação da listagem de shots
 * @param {number} page - página que deve carregar
 */
export const paginate = (dispatch, page) => {
  // busca os novos shots
  dispatch(loadShotsList(page));
  // atualiza a página atual
  dispatch({ type: t.PAGINATE, page });
};

/**
 * Busca a lista de shots em destaque
 *
 * @param {number} page - Página atual da paginação
 * @param {number} perPage - Quantidade de resultados por página
 */
export const loadShotsList = (page = 1, perPage = 20) => ({
  type: t.LOAD_SHOTS_LIST,
  payload: axios.get(`${url}/shots?page=${page}&access_token=${token}&per_page=${perPage}`)
});


