import AppDispatcher from '../app_dispatcher';
import UploadConstants from '../constants/upload_constants';
import { uploadSong } from '../util/song_api_util';

export const submitSong = (title, tags) => {
  uploadSong(
    title,
    tags,
    informSuccess,
    uploadError
  );
};

const informSuccess = song => {
  console.log('song uploaded successfully');
  AppDispatcher.dispatch({
    actionType: UploadConstants.UPLOAD_SUCCESS,
    song: song
  });
};

const uploadError = error => {
  AppDispatcher.dispatch({
    actionType: UploadConstants.UPLOAD_ERROR,
    error: error
  });
};
