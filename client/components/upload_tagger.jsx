import React from 'react';
import { isValid } from '../util/validation_util';
import { addTag, resetTags } from '../actions/tag_actions';

class UploadTagger extends React.Component{
  constructor (props) {
    super(props);
    this.state = {currentTag: ""};
  }

  _addTag (e) {
    e.preventDefault();
    const tag = this.state.currentTag;
    if (isValid(tag)) addTag(tag);
    this.setState({currentTag: ""});
  }

  _updateCurrentTag (e) {
    e.preventDefault();
    this.setState({currentTag: e.target.value});
  }

  render () {
    return (
      <div>
        <form onSubmit={this._addTag.bind(this)}>
          <input
            type="text"
            value={this.state.currentTag}
            onChange={this._updateCurrentTag.bind(this)}
            />
          <input type="submit" value="Add"/>
        </form>
      </div>
    );
  }
}

export default UploadTagger;
