import React from 'react';
import SongList from './song_list';
import { fetchListChunk, setPageLimit } from '../actions/search_actions';
import { pageEnds, pageCount } from '../stores/song_store';

let currentQuery;
class Search extends React.Component{
  componentDidMount () {
    document.addEventListener('scroll', this._handleScroll.bind(this));
    setPageLimit();
  }

  _fetchLastPage (page) {
    if (page > currentQuery) return;
    console.log('up fired');
    currentQuery = page - 1;
    fetchListChunk(currentQuery);
  }

  _fetchNextPage (page) {
    if (page < currentQuery) return;
    console.log('down fired');
    currentQuery = page + 1;
    fetchListChunk(currentQuery);
  }

  _handleScroll () {
    const winPos = document.body.scrollTop + screen.height;
    const docHeight = document.body.offsetHeight;
    const ends = pageEnds();
    const pCount = pageCount();

    if (winPos < docHeight * 0.33 && ends.low > 3) {
      console.log('up load fired');
      this._fetchLastPage(ends.low);
    } else if (winPos > docHeight * 0.66 && ends.high < pCount) {
      this._fetchNextPage(ends.high);
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
