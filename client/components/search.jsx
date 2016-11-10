import React from 'react';

import SongList from './song_list';
import SearchForm from './search_form';
import TagList from './tag_list';
import DropContainer from './drop_container';

import { fetchListChunk, setPageLimit, resetCache } from '../actions/search_actions';
import { lastPage, pageCount } from '../stores/song_store';
import { allTags, TagStore } from '../stores/tag_store';
import { resetTags } from '../actions/tag_actions';

let currentQuery;
class Search extends React.Component{
  constructor (props) {
    super(props);
    resetTags();
  }

  componentDidMount () {
    document.addEventListener('scroll', this._handleScroll.bind(this));
    this.tagListener = TagStore.addListener(this._applyTags);
  }

  componentWillUnmount () {
    document.removeEventListener('scroll', this._handleScroll.bind(this));
    this.tagListener.remove();
  }

  _applyTags () {
    const tags = allTags();
    resetCache(0, tags);
  }

  _fetchNextPage (page) {
    if (page < currentQuery) return;
    const tags = allTags();
    currentQuery = page + 1;
    fetchListChunk(currentQuery, tags);
  }

  _handleScroll () {
    const winPos = document.body.scrollTop + screen.height;
    const docHeight = document.body.offsetHeight;
    const lPage = lastPage();
    const pCount = pageCount();

    if (winPos > docHeight * 0.66 && lPage < pCount) {
      this._fetchNextPage(lPage);
    }
  }

  render () {
    return (
      <div id="search-page" className="page">
        <div id="search-container">
          <SearchForm />
          <TagList />
          <SongList />
        </div>
        <DropContainer/>
      </div>
    );
  }
}

export default Search;
