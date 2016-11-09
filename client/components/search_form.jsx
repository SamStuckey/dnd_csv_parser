import React from 'react';
import { addTag } from '../actions/tag_actions';

class SearchForm extends React.Component{
  constructor (props) {
    super(props);
    this.state={searchField: ""};
  }

  _updateSearch (e) {
    e.preventDefault();
    const str = e.target.value;
    this.setState({searchField: str});
  }

  _handleSubmit (e) {
    e.preventDefault();

    const tag = this.state.searchField;
    addTag(tag);
    this.setState({searchField: ""});
  }

  render () {
    return (
      <div>
        <form className="search_form" onSubmit={this._handleSubmit.bind(this)}>
          <input
            type=""
            placeholder="search by tag"
            value={this.state.searchField}
            onChange={this._updateSearch.bind(this)}
            />
          <input type="submit" value="search"/>
        </form>
      </div>
    );
  }
}

export default SearchForm;
