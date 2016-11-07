import { Store } from 'flux/utils';
import AppDispatcher from '../app_dispatcher';
import SearchConstants from '../constants/search_constants';

let _songList = [];
let _currentPage = 1;

export const SongStore = new Store(AppDispatcher);

export const currentList = () => {
  return _songList.slice();
};

SongStore.__onDispatch = payload => {
  switch(payload.actionType){
    case SearchConstants.RECEIVE_CHUNK:
      _updateLRUCache(payload.chunk);
    break;
  }
};

const _updateLRUCache = newChunk => {
  _songList = newChunk; // NOTE just for testing, remove later in favor of LRU Cache
  SongStore.__emitChange();
};
