import { Store } from 'flux/utils';
import SongConstants from '../constants/song_constants';
import AppDispatcher from '../app_dispatcher';

let _notice = [];
export const ErrorStore = new Store(AppDispatcher);

ErrorStore.__onDispatch = payload => {
  switch (payload.actionType) {
    case SongConstants.UPDATE_SUCCESS:
      _informUpload(payload.song);
      break;
    default:
  }
};

const _informUpload = (song) => {
  resetNotice();
  _notice.push('upload success');
  ErrorStore.__emitChange();
};

export const resetNotice = () => {
  _notice = [];
};

export const getNotice = () => {
  return _notice.slice();
};
