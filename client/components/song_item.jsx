import React from 'react';
import { hashHistory } from 'react-router';

import Tag from './tag';
import { dragSong } from '../actions/download_actions';
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
    console.log('drag started');
    dragSong(this.props.song);
  }

  _showSong (e) {
    e.preventDefault();
    const id = this.props.song.id;

    hashHistory.push(`/songs/${id}`);
  }

  _removeSelf () {

  }

  _addDelete () {
    if (this.props.deleteable) {
      return <button
        className="x"
        onClick={this._removeSelf.bind(this)}
        >X</button>;
    }
  }

  render () {
    const song = this.props.song;
    const tags = this._formatTags();
    const deleteOption = this._addDelete();
    return (
      <li
        draggable="true"
        className="song clear"
        onDragStart={this._dragStart.bind(this)}
        >
        {deleteOption}
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
