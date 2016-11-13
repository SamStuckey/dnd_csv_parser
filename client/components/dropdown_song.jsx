import React from 'react';
import { hashHistory } from 'react-router';

import { dragSong } from '../actions/download_actions';

class DropdownSong extends React.Component{
  constructor (props) {
    super(props);
  }

  _featureSong () {
    const song = this.props.song;
    hashHistory.push(`/songs/${song.id}`);
  }

  _registerDrag () {
    dragSong(this.props.song);
    this.props.closeMenu();
  }

  render () {
    const song = this.props.song;
    return (
      <li
        draggable={true}
        onDrag={this._registerDrag.bind(this)}
        onClick={this._featureSong.bind(this)}
        >
        {song.title}
      </li>
    );
  }
}

export default DropdownSong;
