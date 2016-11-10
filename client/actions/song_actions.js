import SongConstants from '../constants/song_constants';
import TagConstants from '../constants/tag_constants';
import AppDispatcher from '../app_dispatcher';
import { editSong, fetchSong, fillFinder } from '../util/song_api_util';

export const updateSong = (songId, title, tags) => {
  editSong(
    songId,
    title,
    tags,
    receiveUpdate,
    updateError
  );
};

export const showSong = songId => {
  fetchSong(
    songId,
    receiveSong,
    retrievalError
  );
};

export const updateFuzzyFinder = str => {
  fillFinder(
    str,
    receiveFinderSongs,
    finderError
  );
};

export const resetCache = () => {
  AppDispatcher.dispatch({
    actionType: SongConstants.RESET_CACHE
  });
};

const receiveFinderSongs = songs => {
  AppDispatcher.dispatch({
    actionType: SongConstants.UPDATE_FINDER,
    songs: songs
  });
};

const receiveUpdate = song => {
  AppDispatcher.dispatch({
    actionType: SongConstants.UPDATE_SUCCESS,
    song: song
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

const finderError = error => {
  console.log(error);
};
