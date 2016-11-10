import React from 'react';
import { addTag } from '../actions/tag_actions';
import FinderDropdown from './finder_dropdown';

import { updateFuzzyFinder } from '../actions/song_actions';

class SearchForm extends React.Component{
  constructor (props) {
    super(props);
    this.state={searchField: "", dropVis: false, blocked: false};
    document.addEventListener('keydown', this._checkKey.bind(this), false);
  }

  _checkKey (e) {
    if (e.keyCode == 13) {
      this.setState({dropVis: false});
    }
  }

  _updateSearch (e) {
    e.preventDefault();
    const str = e.target.value;
    updateFuzzyFinder(str);
    this.setState({searchField: str, dropVis: true});
  }

  block () {
    this.setState({blocked: true});
  }

  unblock () {
    this.setState({blocked: false});
  }

  _hideDropdown () {
    if (this.state.blocked) return;
    this.setState({dropVis: false});
  }

  _handleSubmit (e) {
    e.preventDefault();

    const tag = this.state.searchField;
    addTag(tag);
    this.setState({searchField: ""});
  }

  _renderDropdown () {
    if (this.state.dropVis) return (
      <FinderDropdown
        block={this.block.bind(this)}
        unblock={this.unblock.bind(this)}
        />
    );
  }

  render () {
    const dropdown = this._renderDropdown();
    return (
      <div>
        <form className="search-form" onSubmit={this._handleSubmit.bind(this)}>
          <input
            type="text"
            className="text"
            placeholder="search by tag or title"
            value={this.state.searchField}
            onBlur={this._hideDropdown.bind(this)}
            onChange={this._updateSearch.bind(this)}
            />
          <input className="button" type="submit" value="search"/>
        </form>
        {dropdown}
      </div>
    );
  }
}

export default SearchForm;
