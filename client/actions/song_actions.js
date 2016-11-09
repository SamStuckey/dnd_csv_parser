import SongConstants from '../constants/song_constants';
import TagConstants from '../constants/tag_constants';
import AppDispatcher from '../app_dispatcher';
import { editSong, fetchSong } from '../util/song_api_util';

export const updateSong = (songId, title, tags) => {
  editSong(
    songId,
    title,
    tags,
    receiveSong,
    updateError
  );
};

export const showSong = (songId) => {
  fetchSong(
    songId,
    receiveSong,
    retrievalError
  );
};

export const resetCache = () => {
  AppDispatcher.dispatch({
    actionType: SongConstants.RESET_CACHE
  });
};

const receiveSong = song => {
  AppDispatcher.dispatch({
    actionType: SongConstants.SONG_RECEIVED,
    song: song
  });

  AppDispatcher.dispatch({
    actionType: TagConstants.RESET_TAGS,
    tags: song.tags
  });
};

const updateError = error => {
  console.log(error);
};

const retrievalError = error => {
  console.log(error);
};
