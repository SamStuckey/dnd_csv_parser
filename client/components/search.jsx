import React from 'react';
import SongList from './song_list';
import { fetchListChunk, setPageLimit } from '../actions/search_actions';
import { lastPage, pageCount } from '../stores/song_store';

let currentQuery;
class Search extends React.Component{
  componentDidMount () {
    document.addEventListener('scroll', this._handleScroll.bind(this));
    // setPageLimit();
  }

  _fetchNextPage (page) {
    if (page < currentQuery) return;
    currentQuery = page + 1;
    fetchListChunk(currentQuery);
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
      <div id="search-page">
        <SongList />
      </div>
    );
  }
}

export default Search;
