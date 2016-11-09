import React from 'react';
import { removeTag } from '../actions/tag_actions';

class TagItem extends React.Component{
  constructor (props) {
    super(props);
  }

  _removeSelf (e) {
    e.preventDefault();
    removeTag(this.props.tag);
  }

  render () {
    return (
      <li>
        {this.props.tag}
        <button onClick={this._removeSelf.bind(this)}>X</button>
      </li>
    );
  }
}

export default TagItem;
