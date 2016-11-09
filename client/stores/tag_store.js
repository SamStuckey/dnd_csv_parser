import { Store } from 'flux/utils';

import AppDispatcher from '../app_dispatcher';
import TagConstants from '../constants/tag_constants';
import UploadConstants from '../constants/upload_constants';
import { fetchListChunk } from '../actions/search_actions';

let _tags = [];
export const TagStore = new Store(AppDispatcher);

TagStore.__onDispatch = payload => {
  switch(payload.actionType){
    case TagConstants.ADD_TAG:
      _addTag(payload.tag);
    break;
    case TagConstants.REMOVE_TAG:
      _removeTag(payload.tag);
    break;
    case TagConstants.RESET_TAGS:
      _resetTags(payload);
    break;
    case UploadConstants.UPLOAD_SUCCESS:
      _resetTags(payload);
    break;
  }
};

export const allTags = () => {
  return _tags.slice();
};

const _addTag = tag => {
  if (!_tags.includes(tag)) {
    _tags.push(tag);
  }
  TagStore.__emitChange();
};

const _removeTag = tag => {
  const i = _tags.indexOf(tag);
  if (i > -1) _tags.splice(i, 1);
  TagStore.__emitChange();
};

const _resetTags = (payload) => {
  const tags = payload.tags;
  _tags = tags ? tags.map((t) => t.description) : [];

  TagStore.__emitChange();
};
