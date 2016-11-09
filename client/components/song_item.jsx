import React from 'react';

import Tag from './tag';

class SongItem extends React.Component{
  constructor (props) {
    super(props);
  }

  _formatTags () {
    const tags = this.props.song.tags;
    return tags.map((tag, i) => <Tag tag={tag} key={i}/>);
  }

  render () {
    const song = this.props.song;
    const tags = this._formatTags();
    return (
      <div>
        {song.title}
        <ul>
          { tags }
        </ul>
      </div>

    );
  }
}

export default SongItem;
