import React from 'react';

import Tag from './tag';
import { dragSong } from '../actions/dnd_actions';

class SongItem extends React.Component{
  constructor (props) {
    super(props);
  }

  _formatTags () {
    const tags = this.props.song.tags;
    return tags.map((tag, i) => <Tag tag={tag} key={i}/>);
  }

  _dragStart (e) {
    dragSong(this.props.song);
  }

  render () {
    const song = this.props.song;
    const tags = this._formatTags();
    return (
      <li
        draggable="true"
        onDragStart={this._dragStart.bind(this)}
        >
        {song.title}
        <ul>
          { tags }
        </ul>
      </li>

    );
  }
}

export default SongItem;
