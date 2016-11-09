import React from 'react';

import SongItem from './song_item';

import { movingSong } from '../stores/dnd_store';

class DropContainer extends React.Component{
  constructor (props) {
    super(props);
    this.state = {songs: []};
  }

  _createCSV () {
    const songs = this.state.songs;

    const lineArray = ['data:text/csv;charset=utf-8,"song","tags"'];
    songs.forEach(function (song, index) {
      const title = song.title;
      const tags = song.tags.map((t) => t.description).join(',');
      const line = `"${title}","${tags}"`;
      lineArray.push(line);
    });
    const csvContent = lineArray.join("\n");

    const encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
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
    console.log('drop');

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
    let button;
    if (this.state.songs.length > 0) {
      button = <button onClick={this._createCSV.bind(this)}>Download</button>;
    }

    const songs = this._mapSongs();

    return (
      <div id="drop-container"
        onDragEnter={this._dragEnter.bind(this)}
        onDragLeave={this._dragLeave.bind(this)}
        onDragOver={this._onDragOver.bind(this)}
        onDrop={this._onDrop.bind(this)}>
        <ul>
          { songs }
        </ul>
        { button }
      </div>
    );
  }
}

export default DropContainer;
