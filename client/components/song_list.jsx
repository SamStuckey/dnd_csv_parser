import React from 'react';
import SongStore from '../stores/song_store';
import { currentPage, currentList, cacheContents } from '../stores/song_store';
import { fetchListChunk } from '../actions/search_actions';


class SongList extends React.Component{
  constructor(props) {
    super(props);
    this.songListener = SongStore.addListener(this._updateSongs.bind(this));
    this.state = {songList: []};
  }

  componentDidMount() {
    fetchListChunk(0);
  }

  _mapSongs() {
    const songList = this.state.songList;
    return Object.keys(songList).map((key) => {
      const song = songList[key];
      return (
        <li className="song" key={key}>
          {song.title}
          {song.tags.join(', ')}
        </li>
      );
    });
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
