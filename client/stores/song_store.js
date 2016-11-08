import { Store } from 'flux/utils';
import AppDispatcher from '../app_dispatcher';
import SearchConstants from '../constants/search_constants';
import { fetchListChunk } from '../actions/search_actions';

const _cache = [];
const SongStore = new Store(AppDispatcher);

SongStore.__onDispatch = payload => {
  switch(payload.actionType){
    case SearchConstants.POPULATE_CACHE:
    _populateCache(payload.chunk);
    break;
    case(SearchConstants.UP_CHUNK):
    _upCache(payload.chunk, 'up');
    break;
    case(SearchConstants.DOWN_CHUNK):
    _downCache(payload.chunk, 'down');
    break;
  }
};

export const currentList = () => {
  return Object.assign({}, ..._cache);
};

// populates cache untill it contains 7 chunks of song list data
const _populateCache = (chunk) => {
  _cache.push(chunk);
  if (_cache.length < 7) {
    fetchListChunk(_cache.length + 1);
  }
  SongStore.__emitChange();
};

const _upCache = (chunk) => {
  _cache.unshift(chunk);
  _cache.pop();
  SongStore.__emitChange();
};

const _downCache = (chunk) => {
  _cache.push(chunk);
  _cache.shift();
  SongStore.__emitChange();
};

export default SongStore;
