import { Store } from 'flux/utils';
import AppDispatcher from '../app_dispatcher';
import UploadConstants from '../constants/upload_constants';

export const UploadStore = new Store(AppDispatcher);

let _song = {};
UploadStore.__onDispatch = payload => {
  switch(payload.actionType){
    case UploadConstants.UPLOAD_SUCCESS:
      _updateSong(payload.song);
    break;
  }
};

const _updateSong = (song) => {
  _song = song;
  UploadStore.__emitChange();
};

export const uploadedSong = () => {
  return Object.assign({}, _song);
};
