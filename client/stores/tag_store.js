import { Store } from 'flux/utils';
import AppDispatcher from '../app_dispatcher';
import TagConstants from '../constants/tag_constants';
import { fetchListChunk } from '../actions/search_actions';

const _tags = [];
export const TagStore = new Store(AppDispatcher);

TagStore.__onDispatch = payload => {
  switch(payload.actionType){
    case TagConstants.ADD_TAG:
      _addTag(payload.tag);
    break;
  }
};

export const allTags = () => {
  return _tags.slice();
};

const _addTag = tag => {
  _tags.push(tag);
  TagStore.__emitChange();
};
