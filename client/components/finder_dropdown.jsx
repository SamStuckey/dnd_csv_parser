import React from 'react';
import ReactDOM from 'react-dom';

import DropdownSong from './dropdown_song';

import { finderSongs, FinderStore } from '../stores/finder_store';

class FinderDropdown extends React.Component{
  constructor (props) {
    super(props);
    this.state = ({
      songs: {},
    });
    this.finderListener = FinderStore.addListener(this._updateBox.bind(this));
  }

  componentDidMount () {
    window.addEventListener('click', this._hideDropdown, false);
  }

  componentWillUnmount () {
    this.finderListener.remove();
    window.removeEventListener('click', this._hideDropdown, false);
  }

  _updateBox () {
    const songs = finderSongs();
    this.setState({songs: songs, visible: true});
  }

  _closeMenu () {
    this.props.unblock();
    this.props.closeWin();
  }

  _formatSongs () {
    const songs = this.state.songs;
    return Object.keys(songs).map((songId, i) => {
      const song = songs[songId];
      return <DropdownSong song={song} key={i} closeMenu={this._closeMenu.bind(this)}/>;
    });
  }

  render () {
    const songs = this._formatSongs();
    return (
      <ul
        id="finder-dropdown"
        onMouseEnter={this.props.block}
        onMouseLeave={this.props.unblock}
        >
        {songs}
      </ul>
    );
  }
}

export default FinderDropdown;
