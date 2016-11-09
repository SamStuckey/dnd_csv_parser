import React from 'react';

import { singleSong, SongViewStore } from '../stores/song_view_store';
import { updateSong } from '../actions/song_actions';
import { allTags } from '../stores/tag_store';

class EditSong extends React.Component{
  constructor (props) {
    super(props);
    this.state = {title: ""};
    this.songViewListenr = SongViewStore.addListener(this._prefill.bind(this));
  }

  _prefill () {
    const song = singleSong();
    this.setState({title: song.title});
  }

  _updateTitle (e) {
    e.preventDefault();
    const title = e.target.value;
    this.setState({title: title});
  }

  _handleSubmit (e) {
    e.preventDefault();
    const tags = allTags();
    const title = this.state.title;
    const song = singleSong();
    updateSong(song.id, title, tags);
  }

  render () {
    return (
      <div>
        <form onSubmit={this._handleSubmit.bind(this)}>
          <input
            type="text"
            placeholder="title"
            value={this.state.title}
            onChange={this._updateTitle.bind(this)}
            />
          <input type="submit" value="Save"/>
        </form>
      </div>
    );
  }
}

export default EditSong;
