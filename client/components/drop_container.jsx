import React from 'react';

import SongItem from './song_item';

import { movingSong } from '../stores/dnd_store';
import { creatCSV, downloadCSV } from '../util/export_util';

class DropContainer extends React.Component{
  constructor (props) {
    super(props);
    this.state = {songs: [], active: false};
  }

  _dragEnter () {
    this.setState({active:true});
  }

  _dragLeave () {
    this.setState({active:false});
  }

  _export () {
    const content = this.state.songs;
    const csvFile = createCSV(content);
    downloadCSV(csvFile);
  }

  _isNew (song) {
    const keys = this.state.songs.map((s) => s.id);
    return !keys.includes(song.id);
  }

  _isActive () {
    const active = this.state.active;
    return "drop-container " + (active ? "hover" : "");
  }

  _dragOver (e) {
    console.log('drag over');
  }

  _onDrop (e) {
    e.preventDefault();

    const song = movingSong();
    const oldState = this.state.songs;

    if (this._isNew(song)) oldState.push(song);
    this.setState({songs: oldState});
  }

  _formatSongs () {
    const songs = this.state.songs;
    return songs.map((song, i) => {
        return <SongItem song={song} key={i}/>;
      }
    );
  }

  render () {
    let button;
    if (this.state.songs.length > 0) {
      button = <button onClick={this._export.bind(this)}>Download</button>;
    }

    const songs = this._formatSongs();
    const look = this._isActive();

    return (
      <div id="drop-container"
        onDragEnter={this._dragEnter.bind(this)}
        onDragLeave={this._dragLeave.bind(this)}
        onDragOver={this._dragOver.bind(this)}
        onDrop={this._onDrop.bind(this)}>
        className={look}
        ref={(zone) => this.dropZone = zone}>
        <ul>
          { songs }
        </ul>
        { button }
      </div>
    );
  }
}

export default DropContainer;
