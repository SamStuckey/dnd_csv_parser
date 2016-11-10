import React from 'react';

import ErrorConstants from '../constants/error_constants';
import { getNotice, ErrorStore } from '../stores/error_store';
import { singleSong, SongViewStore } from '../stores/song_view_store';
import { updateSong } from '../actions/song_actions';
import { allTags } from '../stores/tag_store';
import { isValid } from '../util/validation_util';

class EditSong extends React.Component{
  constructor (props) {
    super(props);
    this.state = {title: "", notice: "", tiErr: "", taErr: ""};
    this.songViewListener = SongViewStore.addListener(this._prefill.bind(this));
    this.errorListener = ErrorStore.addListener(this._setNotice.bind(this));
  }

  componentWillUnmount () {
    this.songViewListener.remove();
    this.errorListener.remove();
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
    const tiErr = isValid(title) ? "" : ErrorConstants.STRING_ERROR;
    const taErr = (tags.length > 0) ? "" : ErrorConstants.TAG_ERROR;

    if (!!tiErr || !!taErr) {
      this.setState({tiErr: tiErr, taErr: taErr});
    } else {
      const song = singleSong();
      updateSong(song.id, title, tags);
    }
  }

  _setNotice () {
    const notice = getNotice();
    this.setState({notice: notice});
  }

  render () {
    return (
      <div>
        <p className="error">{ this.state.notice }</p>
        <p className="error">{ this.state.tiErr }</p>
        <form onSubmit={this._handleSubmit.bind(this)}>
          <input
            type="text"
            placeholder="title"
            value={this.state.title}
            onChange={this._updateTitle.bind(this)}
            />
          <input type="submit" value="Save"/>
        </form>
        <p className="error">{this.state.taErr}</p>
      </div>
    );
  }
}

export default EditSong;
