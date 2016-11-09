import DnDConstants from '../constants/dnd_constants';
import AppDispatcher from '../app_dispatcher';

export const dragSong = song => {
  AppDispatcher.dispatch({
    actionType: DnDConstants.DRAG_SONG,
    song: song
  });
};
