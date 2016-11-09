import { Store } from 'flux/utils';
import AppDispatcher from '../app_dispatcher';
import SongConstants from '../constants/song_constants';

let _song = {};
export const SongViewStore = new Store(AppDispatcher);

SongViewStore.__onDispatch = payload => {
  switch (payload.actionType){
    case SongConstants.SONG_RECEIVED:
      _updateSong(payload.song);
    break;
  }
};

const _updateSong = (song) => {
  _song = song;
  SongViewStore.__emitChange();
};

export const singleSong = () => {
  return Object.assign({}, _song);
};
