import React from 'react';

import TagList from './tag_list';
import EditSong from './edit_song';

import { singleSong, SongViewStore } from '../stores/song_view_store';
import { showSong } from '../actions/song_actions';

class ShowSong extends React.Component{
  constructor (props) {
    super(props);
    this.SongViewListener = SongViewStore.addListener(this._updateSong.bind(this));
    this.state = {song: {}};
  }

  componentDidMount () {
    const song = this.props.params.songId;
    showSong(song);
  }

  _updateSong () {
    const song = singleSong();
    this.setState({song: song});
  }

  render () {
    let song = {};
    const s = this.state.song;
    if (s) song = s;

    return (
      <div>
        {song.title}
        <EditSong song={song}/>
        <TagList />
      </div>
    );
  }
}

export default ShowSong;
