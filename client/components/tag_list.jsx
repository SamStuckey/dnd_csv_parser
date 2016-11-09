import React from 'react';
import TagItem from './tag_item';
import { TagStore, allTags } from '../stores/tag_store';
import { resetTags } from '../actions/tag_actions';

class TagList extends React.Component{
  constructor (props) {
    super(props);
    this.tagListener = TagStore.addListener(this._updateTags.bind(this));
    this.state = {tags: []};
  }

  componentWillUnmount () {
    this.tagListener.remove();
    this.uploadListner.remove();
  }

  _updateTags () {
    const tags = allTags();
    this.setState({tags: tags});
  }

  _formatTags () {
    const tags = allTags();
    return tags.map((tag, i) => {
      return (
        <TagItem key={i} tag={tag}/>
      );
    });
  }

  render () {
    const tags = this._formatTags();
    return <ul>{tags}</ul>;
  }
}

export default TagList;
