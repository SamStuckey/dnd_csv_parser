import AppDispatcher from '../app_dispatcher';
import SearchConstants from '../constants/search_constants';
import ErrorConstants from '../constants/error_constants';
import { fetchChunk, fetchPageLimit } from '../util/search_api_util';

export const fetchListChunk = (page, tags = []) => {
  fetchChunk(
    page,
    tags,
    receiveChunk,
    setErrors
  );
};

export const resetCache = (page, tags) => {
  fetchChunk(
    page,
    tags,
    rebuildCache,
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

const receiveChunk = (chunk) => {
  AppDispatcher.dispatch({
    actionType: SearchConstants.POPULATE_CACHE,
    chunk: chunk
  });
};

const rebuildCache = (chunk) => {
  AppDispatcher.dispatch({
    actionType: SearchConstants.REBUILD_CACHE,
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
