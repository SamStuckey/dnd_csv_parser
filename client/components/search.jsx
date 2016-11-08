import React from 'react';
import SongList from './song_list';
import { fetchListPage } from '../actions/search_actions';
import { currentPage } from '../stores/song_store';

let requested = false;
class Search extends React.Component{
  componentDidMount () {
    document.addEventListener('scroll', this._handleScroll);
  }

  _fetchLastPage () {
    const page = currentPage();
    fetchPage(page - 1);
  }

  _fetchNextPage () {
    const page = currentPage();
    fetchPage(page + 1);
  }

  _handleScroll () {
    const st = document.body.scrollTop;
    const ofh = document.body.offsetHeight;
    const h = screen.height;

    // console.log('scroll top ' + st);
    // console.log('ofset ' + ofh);
    // console.log('screen h ' + h);

    if (st + h >= ofh - 1500 && !requested ) {
      console.log('update fired');
      const page = currentPage();

      requested = true;
      fetchListChunk(page + 1);
    }
  }

  render () {
    return (
      <div id="search-page">
        <SongList pending={requested}/>
      </div>
    );
  }
}

export default Search;
