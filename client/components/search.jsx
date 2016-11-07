import React from 'react';
import SongList from './song_list';


class Search extends React.Component{
  _fetchLastPage() {
    const page = currentPage();
    fetchPage(page - 1);
  }

  _fetchNextPage() {
    const page = currentPage();
    fetchPage(page + 1);
  }

  render () {
    return (
      <div id="search-page">
        <SongList/>
      </div>
    );
  }
}

export default Search;
