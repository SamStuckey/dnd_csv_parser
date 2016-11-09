import React from 'react';

import { resetTags, addTag } from '../actions/tag_actions';
import { removeTag } from '../actions/song_actions';


class Tag extends React.Component{
  _filterByTag (e) {
    e.preventDefault();
    resetTags();
    addTag(this.props.tag.description);
  }

  _removeTag () {
    const song = this.props.song;
    removeTag(song.id, this.props.tag);
  }

  render () {
    const tag = this.props.tag.description;
    return (
      <li className="tag">
        <a onClick={this._filterByTag.bind(this)}>{tag}</a>
      </li>
    );
  }
}

export default Tag;
