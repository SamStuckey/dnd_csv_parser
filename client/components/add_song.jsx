import React from 'react';

import UploadTagger from './upload_tagger';
import TagList from './tag_list';

import { submitSong } from '../actions/upload_actions';
import { uploadedSong, UploadStore } from '../stores/upload_store';
import { resetTags } from '../actions/tag_actions';
import { isValid } from '../util/validation_util';
import { allTags } from '../stores/tag_store';

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
    this.setState({title: "", upload: upload});
  }

  _updateTitle (e) {
    e.preventDefault();
    this.setState({title: e.target.value});
  }

  _handleSubmit (e) {
    e.preventDefault();
    const tags = allTags();
    const title = this.state.title;
    if (isValid(title)) submitSong(title, tags);
  }

  _formatUploadedSong () {
    const song = this.state.upload;
    if (song.title) {
      return (
        <div>
          <h3>{song.title}</h3>
          <p>uploaded successfully</p>
        </div>
      );
    }
  }

  render () {
    const uploadedSong = this._formatUploadedSong();
    return(
      <div>
        <form onSubmit={this._handleSubmit.bind(this)}>
          <input
            value={this.state.title}
            onChange={this._updateTitle.bind(this)}
            />
          <input type="submit" value="submit"/>
        </form>
        <UploadTagger/>
        <TagList />
        { uploadedSong }
      </div>
    );
  }
}

export default AddSong;
