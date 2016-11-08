import { Store } from 'flux/utils';
import AppDispatcher from '../app_dispatcher';
import SearchConstants from '../constants/search_constants';
import { fetchListChunk } from '../actions/search_actions';

let _pageCount = 21;
const _cache = [];

export const SongStore = new Store(AppDispatcher);

SongStore.__onDispatch = payload => {
  switch(payload.actionType){
    case SearchConstants.SET_LIMIT:
    _setPageCount(payload.limit);
    break;
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

// track first and last page for purpose of infinte scroll
export const pageEnds = () => {
  return {low: _cache[0].page, high: _cache[_cache.length - 1].page};
};

// combine all page objects to be mapped inside of song_list component
export const currentList = () => {
  return Object.assign({}, ..._cache);
};

// return an upper limit for the infite scroll
export const pageCount = () => {
  return _pageCount;
};

// set _pageCount on initial search component load
const _setPageCount = (limit) => {
  _pageCount = Math.ceil(limit / 50); // 50 results per page
};

// populates cache untill it contains 7 chunks of song list data
const _populateCache = (chunk) => {
  _cache.push(chunk);
  if (_cache.length < 7) {
    // Page index starts at zero, so length will fetch the next page
    fetchListChunk(_cache.length);
  }
  SongStore.__emitChange();
};

// next page when scrolling up added to cache
const _upCache = (chunk) => {
  _cache.unshift(chunk);
  _cache.pop();
  SongStore.__emitChange();
};

// next page when scrolling down added to cache
const _downCache = (chunk) => {
  _cache.push(chunk);
  _cache.shift();
  SongStore.__emitChange();
};
