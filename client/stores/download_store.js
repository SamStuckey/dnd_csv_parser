import { Store } from 'flux/utils';
import AppDispatcher from '../app_dispatcher';
import DnDConstants from '../constants/dnd_constants';

const _songs = [];
export const DownloadStore = new Store(AppDispatcher);

DownloadStore.__onDispatch = payload => {
  switch (payload.actionType){
    case DnDConstants.ADD_SONG:
      _addSong(payload.song);
      break;
    case DnDConstants.REMOVE_SONG:
      _removeSong(payload.song);
      break;
  }
};

export const allSongs = () => {
  return _songs.slice();
};

const _addSong = (song) => {
  _songs.push(song);
  DownloadStore.__emitChange();
};

const _removeSong = (song) => {
  let foundAt;
  for (let s = 0; s < _songs.length; s++) {
    if (_songs[s].id === song.id) {
      foundAt = s;
      break;
    }
  }
  if (foundAt + 1) _songs.splice(foundAt, 1);
  DownloadStore.__emitChange();
};
