import { Store } from 'flux/utils';
import AppDispatcher from '../app_dispatcher';
import SongConstants from '../constants/song_constants';

let _songs = {};
export const FinderStore = new Store(AppDispatcher);

FinderStore.__onDispatch = payload => {
  switch (payload.actionType){
    case SongConstants.UPDATE_FINDER:
    _updateFinder(payload.songs);
    break;
  }
};

const _updateFinder = songs => {
  _songs = songs;
  FinderStore.__emitChange();
};

export const finderSongs = () => {
  return Object.assign({}, _songs);
};
