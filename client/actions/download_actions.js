import AppDispatcher from '../app_dispatcher';
import DnDConstants from '../constants/dnd_constants';

export const addToDownloads = song => {
  console.log('add to dowloads action fired');
  AppDispatcher.dispatch({
    actionType: DnDConstants.ADD_SONG,
    song: song
  });
};

export const removeFromDownloads = song => {
  AppDispatcher.dispatch({
    actionType: DnDConstants.REMOVE_SONG,
    song: song
  });
};

export const dragSong = song => {
  console.log('drag action fired');
  AppDispatcher.dispatch({
    actionType: DnDConstants.DRAG_SONG,
    song: song
  });
};
