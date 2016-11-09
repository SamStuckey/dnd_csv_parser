import TagConstants from '../constants/tag_constants';
import AppDispatcher from '../app_dispatcher';

export const addTag = tag => {
  AppDispatcher.dispatch({
    actionType: TagConstants.ADD_TAG,
    tag: tag
  });
};
