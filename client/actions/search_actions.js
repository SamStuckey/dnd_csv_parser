import AppDispatcher from '../app_dispatcher';
import SearchConstants from '../constants/search_constants';
import ErrorConstants from '../constants/error_contants';

export const fetchListPage = page => {
  fetchChunk(
    page,
    receiveChunk,
    setErrors
  );
};

const receiveChunk = (chunk) => {
  AppDispatcher.dispatch({
    actionType: SearchConstants.RECEIVE_CHUNK,
    chunk: chunk
  });
};

const setErrors = (errors) => {
  AppDispatcher.dispatch({
    actionType: ErrorConstants.RECEIVE_ERRORS,
    errors: errors
  });
};
