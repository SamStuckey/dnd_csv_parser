import { Store } from 'flux/utils';
import AppDispatcher from '../app_dispatcher';
import UploadConstants from '../constants/upload_constants';

export const UploadStore = new Store(AppDispatcher);

UploadStore.__onDispatch = payload => {
  switch(payload.actionType){
    case UploadConstants.UPLOAD_SUCCESS:

    break;
  }
};

export const newTags = () => {
  return _newTags.slice();
};
