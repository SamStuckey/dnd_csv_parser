import React from 'react';

import SongItem from './song_item';

import { movingSong } from '../stores/dnd_store';

class DropContainer extends React.Component{
  constructor (props) {
    super(props);
    this.state = {songs: []};
  }
  _dragEnter () {
    console.log('enter');
  }

  _dragLeave () {
    console.log('leave');
  }

  _isNew (song) {
    const keys = this.state.songs.map((s) => s.id);
    return !keys.includes(song.id);
  }

  _onDrop (e) {
    e.preventDefault();

    const song = movingSong();
    const st = this.state.songs;

    if (this._isNew(song)) st.push(song);

    this.setState({songs: st});
  }

  _onDragOver (e) {
    e.preventDefault();
    console.log('drag over');
  }

  _mapSongs () {
    const songs = this.state.songs;
    return songs.map((song, i) => {
        return <SongItem song={song} key={i}/>;
      }
    );
  }

  render () {
    const songs = this._mapSongs();
    return (
      <ul
        id="drop-container"
        onDragEnter={this._dragEnter.bind(this)}
        onDragLeave={this._dragLeave.bind(this)}
        onDragOver={this._onDragOver.bind(this)}
        onDrop={this._onDrop.bind(this)}>
        {songs}
      </ul>
    );
  }
}

export default DropContainer;
