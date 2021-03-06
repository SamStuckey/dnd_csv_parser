import { Store } from 'flux/utils';
import AppDispatcher from '../app_dispatcher';
import SearchConstants from '../constants/search_constants';
import { fetchListChunk } from '../actions/search_actions';
import { allTags } from './tag_store';

let _pageCount = 19;
let _cache = [];

export const SongStore = new Store(AppDispatcher);

SongStore.__onDispatch = payload => {
  switch(payload.actionType){
    case SearchConstants.SET_LIMIT:
    _setPageCount(payload.limit);
    break;
    case SearchConstants.POPULATE_CACHE:
    _populateCache(payload.chunk);
    break;
    case SearchConstants.REBUILD_CACHE:
    _cache = [];
    _populateCache(payload.chunk);
    break;
    case SearchConstants.RESET_CACHE:
    _resetCache();
    break;
  }
};

// track first and last page for purpose of infinte scroll
export const lastPage = () => {
  const l = _cache.length;
  return l ? _cache[l - 1].page : 0;
};

// combine all page objects to be mapped inside of song_list component
export const currentList = () => {
  return Object.assign({}, ..._cache);
};

// return an upper limit for the infite scroll
export const pageCount = () => {
  return _pageCount;
};

export const _resetCache = (song) => {
  _cache = song ? song : [];
};

// set _pageCount on initial search component load
const _setPageCount = limit => {
  _pageCount = Math.ceil(limit / 50); // 50 results per page
};

// populates cache untill it contains 7 chunks of song list data
const _populateCache = (chunk) => {
  _cache.push(chunk);
  if (_cache.length < 7) {
    // Page index starts at zero, so length will fetch the next page
    const tags = allTags();
    fetchListChunk(_cache.length, tags);
  }
  SongStore.__emitChange();
};
