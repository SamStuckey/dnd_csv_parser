import React from 'react';

import { resetTags, addTag } from '../actions/tag_actions';

class Tag extends React.Component{
  _filterByTag (e) {
    e.preventDefault();
    resetTags();
    addTag(this.props.tag.description);
  }

  render () {
    const tag = this.props.tag.description;
    return (
      <li><a onClick={this._filterByTag.bind(this)}>{tag}</a></li>
    );
  }
}

export default Tag;
