import React from 'react';

import SongItem from './song_item';

import { currentList, SongStore } from '../stores/song_store';
import { fetchListChunk } from '../actions/search_actions';

class SongList extends React.Component{
  constructor(props) {
    super(props);
    this.songListener = SongStore.addListener(this._updateSongs.bind(this));
    this.state = {songList: []};
  }

  componentWillUnmount () {
    this.songListener.remove();
  }

  componentDidMount() {
    fetchListChunk(0);
  }

  _mapSongs() {
    const songs = [];
    const songList = this.state.songList;
    const keys = Object.keys(songList);

    for(let k = 0; k < keys.length; k++ ){
      const key = keys[k];
      if (key === 'page') continue;

      const song = songList[key];
      songs.push(<SongItem song={song} key={key}/>);
    }

    return songs;
  }

  _updateSongs() {
    const newList = currentList();
    this.setState({songList: newList});
  }

  render () {
    const songs = this._mapSongs();

    return (
      <ul className="songs">{songs}</ul>
    );
  }
}

export default SongList;
