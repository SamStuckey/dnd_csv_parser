import React from 'react';
import { hashHistory } from 'react-router';

import UploadTagger from './upload_tagger';
import TagList from './tag_list';
import ErrorConstants from '../constants/error_constants';

import { submitSong } from '../actions/upload_actions';
import { uploadedSong, UploadStore } from '../stores/upload_store';
import { resetTags } from '../actions/tag_actions';
import { isValid } from '../util/validation_util';
import { allTags } from '../stores/tag_store';
import { uploadId } from '../stores/error_store';

class AddSong extends React.Component{
  constructor (props) {
    super(props);
    resetTags();
    this.state = {title: "", upload: {}};
    this.submitListener = UploadStore.addListener(this._addUpload.bind(this));
  }

  componentWillUnmount () {
    this.submitListener.remove();
  }

  _addUpload () {
    const upload = uploadedSong();
    this.setState({title: "", upload: upload, tiErr: "", taErr: ""});
  }

  _updateTitle (e) {
    e.preventDefault();
    this.setState({title: e.target.value});
  }

  _handleSubmit (e) {
    e.preventDefault();
    const title = this.state.title;
    const tags = allTags();
    const tiErr = isValid(title) ? "" : ErrorConstants.STRING_ERROR;
    const taErr = ((tags.length > 0) ? "" : ErrorConstants.TAG_ERROR);

    if (!!tiErr || !!taErr) {
      this.setState({tiErr: tiErr, taErr: taErr});
    } else {
      submitSong(title, tags);
    }
  }

  _formatUploadedSong () {
    const song = this.state.upload;
    if (song.title) {
      return (
        <div className="notice">
          <h3>{song.title}</h3>
          <p>uploaded successfully</p>
        </div>
      );
    }
  }

  render () {
    const uploadedSong = this._formatUploadedSong();
    return(
      <div className="song-page">
        <form onSubmit={this._handleSubmit.bind(this)}>
          <p className="error">{ this.state.tiErr }</p>
          <input
            placeholder="title"
            value={this.state.title}
            onChange={this._updateTitle.bind(this)}
            />
          <input type="submit" value="submit"/>
        </form>
        <p className="error">{ this.state.taErr }</p>
        <UploadTagger/>
        <TagList />
        { uploadedSong }
      </div>
    );
  }
}

export default AddSong;
