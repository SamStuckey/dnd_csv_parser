import AppDispatcher from '../app_dispatcher';
const SearchConstants = require('../constants/search_constants');
const ErrorConstants = require('../constants/error_constants');
import { fetchChunk, fetchPageLimit } from '../util/search_api_util';

export const fetchListChunk = (page, dir, counter) => {
  const chunkDirCB = _chunkDir(dir);
  fetchChunk(
    page,
    chunkDirCB,
    setErrors
  );
};

export const setPageLimit = () => {
  fetchPageLimit(
    passPageLimit
  );
};

const passPageLimit = (limit) => {
  AppDispatcher.dispatch({
    actionType: SearchConstants.SET_LIMIT,
    limit: limit
  });
};

const reciveChunk = (chunk) => {
  AppDispatcher.dispatch({
    actionType: SearchConstants.POPULATE_CACHE,
    chunk: chunk
  });
};

const upChunk = (chunk) => {
  AppDispatcher.dispatch({
    actionType: SearchConstants.UP_CHUNK,
    chunk: chunk
  });
};

const downChunk = (chunk) => {
  AppDispatcher.dispatch({
    actionType: SearchConstants.DOWN_CHUNK,
    chunk: chunk
  });
};

const setErrors = (errors) => {
  AppDispatcher.dispatch({
    actionType: ErrorConstants.RECEIVE_ERRORS,
    errors: errors
  });
};

const _chunkDir = (dir) => {
  if (dir === "up") {
    return upChunk;
  } else if (dir === "down") {
    return downChunk;
  } else {
    return reciveChunk;
  }
};
