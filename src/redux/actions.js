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

/**
 * Busca um shot pelo id
 *
 * @param {string} id - id do shot
 */
export const loadShot = id => ({
  type: t.LOAD_SHOT,
  payload: axios.get(`${url}/shots/${id}?access_token=${token}`)
});

/**
 * Exibe a imagem do shot em seu maior tamanho
 */
export const showLargeImage = () => ({ type: t.SHOW_LARGE_IMAGE });

/**
 * Exibe a imagem do shot em seu tamanho medio
 */
export const hideLargeImage = () => ({ type: t.HIDE_LARGE_IMAGE });