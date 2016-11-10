import React from 'react';

import SongItem from './song_item';

import { movingSong } from '../stores/dnd_store';
import { createCSV, downloadCSV } from '../util/export_util';
import { addToDownloads } from '../actions/download_actions';
import { allSongs, DownloadStore } from '../stores/download_store';

class DropContainer extends React.Component{
  constructor (props) {
    super(props);
    this.state = {songs: [], active: false};
    this.dlListener = DownloadStore.addListener(this._updateSongs.bind(this));
  }

  componentWillUnmount () {
    this.dlListener.remove();
  }

  _updateSongs () {
    const songs = allSongs();
    this.setState({songs: songs});
  }

  _dragEnter (e) {
    e.preventDefault();
    this.setState({active: true});
  }

  _dragLeave (e) {
    e.preventDefault(e);
    this.setState({active: false});
  }

  _export (e) {
    e.preventDefault();
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
    e.preventDefault();
  }

  _onDrop (e) {
    e.preventDefault();

    const song = movingSong();
    addToDownloads(song);
    this.setState({active: false});
  }

  _formatSongs () {
    const songs = this.state.songs;
    return songs.map((song, i) => {
        return <SongItem deleteable={true} song={song} key={i}/> ;
      }
    );
  }



  render () {
    let button;
    if (this.state.songs.length > 0) {
      button = <button
        className="download"
        onClick={this._export.bind(this)}>Download</button>;
    }

    const songs = this._formatSongs();
    const look = this._isActive();

    return (
      <div id="drop-container"
        onDragEnter={this._dragEnter.bind(this)}
        onDragLeave={this._dragLeave.bind(this)}
        onDragOver={this._dragOver.bind(this)}
        onDrop={this._onDrop.bind(this)}
        className={look}>
        <ul>{songs}</ul>
        { button }
      </div>
    );
  }
}

export default DropContainer;
