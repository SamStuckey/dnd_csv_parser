import React from 'react';
import { currentPage, currentList, SongStore } from '../stores/song_store';
import { fetchListPage } from '../actions/search_actions';


class SongList extends React.Component{
  constructor(props) {
    super(props);
    this.songListener = SongStore.addListener(this._updateSongs);
    this.state = {songList: []};
  }

  componentDidMount() {
    fetchListPage(1);
  }

  _updateSongs() {
    const newList = currentList();
    this.setState({songList: newList});
  }

  render () {
    const songs = this.state.songList.map((song, idx) => {
      <li className="song" key={idx}>{song}</li>;
    });

    return (
      <ul className="songs">{songs}</ul>
    );
  }
}

export default SongList;
