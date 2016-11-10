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
      <li className="tag">
        {this.props.tag}
        <button className="x" onClick={this._removeSelf.bind(this)}>X</button>
      </li>
    );
  }
}

export default TagItem;
