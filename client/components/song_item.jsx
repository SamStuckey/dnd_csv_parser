import React from 'react';
import { hashHistory } from 'react-router';

import Tag from './tag';
import { dragSong } from '../actions/dnd_actions';
import { showSong } from '../actions/song_actions';

class SongItem extends React.Component{
  constructor (props) {
    super(props);
  }

  _formatTags () {
    const tags = this.props.song.tags;
    return tags.map((tag, i) => {
      return <Tag tag={tag} key={i} song={this.props.song}/>;
    });
  }

  _dragStart (e) {
    dragSong(this.props.song);
  }

  _showSong (e) {
    e.preventDefault();
    const id = this.props.song.id;

    hashHistory.push(`/songs/${id}`);
  }

  render () {
    const song = this.props.song;
    const tags = this._formatTags();
    return (
      <li
        draggable="true"
        className="song clear"
        onDragStart={this._dragStart.bind(this)}
        >
        <a
          onClick={this._showSong.bind(this)}
          className="title"
          >{song.title}</a>
        <ul className="tags">
          { tags }
        </ul>
      </li>
    );
  }
}

export default SongItem;
