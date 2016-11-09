import AppDispatcher from '../app_dispatcher';
import UploadConstants from '../constants/upload_constants';
import uploadSong from '../util/upload_api_util';

export const submitSong = (title, tags) => {
  uploadSong(
    title,
    tags,
    informSuccess,
    uploadError
  );
};

const informSuccess = (song) => {
  AppDispatcher.dispatch({
    type: UploadConstants.UPLOAD_SUCCESS,
    song: song
  });
};

const uploadError = (error) => {
  AppDispatcher.dispatch({
    type: UploadConstants.UPLOAD_ERROR,
    error: error
  });
};
