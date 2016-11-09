import React from 'react';

import UploadTagger from './upload_tagger';
import TagList from './tag_list';

import { newTags, UploadStore } from '../stores/upload_store';
import { submitSong } from '../actions/upload_actions';
import { resetTags } from '../actions/tag_actions';

class AddSong extends React.Component{
  constructor (props) {
    super(props);
    resetTags();
    this.state = {title: ""};
  }

  _updateTitle (e) {
    e.preventDefault();
    this.setState({title: e.target.value});
  }

  _handleSubmit () {
    e.preventDefault();
    const tags = newTags();
    submitSong(title, tags);
  }

  render () {
    return(
      <div>
        <form onSubmit={this._handleSubmit}>
          <input
            value={this.state.title}
            onChange={this._updateTitle}
            />
        </form>
        <UploadTagger/>
        <TagList />
      </div>
    );
  }
}

export default AddSong;
