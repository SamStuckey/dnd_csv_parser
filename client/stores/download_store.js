import { Store } from 'flux/utils';
import AppDispatcher from '../app_dispatcher';
import DnDConstants from '../constants/dnd_constants';

const _songs = [];
export const DownloadStore = new Store(AppDispatcher);

DownloadStore.__onDispatch = payload => {
  switch (payload.actionType){
    case DnDConstants.ADD_SONG:
    console.log('song added to download store');
      _addSong(payload.song);
      break;
    case DnDConstants.REMOVE_SONG:
      _removeSong(payload.song);
      break;
  }
};

export const allSongs = () => {
  console.log('songs retrived from download store');
  return _songs.slice();
};

const _addSong = (song) => {
  _songs.push(song);
  DownloadStore.__emitChange();
};

const _removeSong = (song) => {
  let foundAt;
  for (let s = 0; s < _songs.length; s++) {
    if (s.id === song.id) {
      foundAt = s;
      break;
    }
  }

  if (foundAt) _songs.splice(foundAt, 1);
  DownloadStore.__emitChange();
};
