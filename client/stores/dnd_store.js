import { Store } from 'flux/utils';
import AppDispatcher from '../app_dispatcher';
import DnDConstants from '../constants/dnd_constants';

let _song;
export const DnDStore = new Store(AppDispatcher);

DnDStore.__onDispatch = payload => {
  switch(payload.actionType){
    case DnDConstants.DRAG_SONG:
      _dragSong(payload.song);
    break;
  }
};

const _dragSong = (song) => {
  _song = song;
  console.log('song in store');
  DnDStore.__emitChange();
};

export const movingSong = () => {
  return Object.assign({}, _song);
};
